import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Mic, Upload, HelpCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/Card";
import Button from "../components/ui/Button";
import AudioRecorder from "../components/audio/AudioRecorder";
import AudioUploader from "../components/audio/AudioUploader";
import TextSubmission from "../components/text/TextSubmission";
import { AudioSubmission } from "../types";

const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"record" | "upload" | "text">(
    "record"
  );
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [postcode, setPostcode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("user_name", name);
    sessionStorage.setItem("user_postcode", postcode);
  }, [name, postcode]);

  const uploadToBackend = async (audioBlob: Blob, contentType: string) => {
    // Validate name before proceeding
    if (!name.trim()) {
      setError("Please enter your name before submitting.");
      return;
    }

    setError(null);

    const submissionId = uuidv4();

    const submission: AudioSubmission = {
      id: submissionId,
      contentType,
      createdAt: new Date(),
      status: "uploading",
    };

    sessionStorage.setItem(
      `submission_${submissionId}`,
      JSON.stringify(submission)
    );
    (window as any).submissionBlob = audioBlob;

    navigate(`/processing/${submissionId}`);
  };

  const handleRecordingComplete = async (recording: Blob) => {
    try {
      // Upload the recording to the backend
      await uploadToBackend(recording, recording.type || "audio/webm");
    } catch (error) {
      console.error("Error processing recording:", error);
      setError("Failed to upload recording. Please try again.");
    }
  };

  const extensionToContentType = (extension: string) => {
    switch (extension.toLowerCase()) {
      case "m4a":
        return "audio/mp4"; // m4a is a subset of mp4
      case "mp3":
        return "audio/mpeg";
      case "wav":
        return "audio/wav";
      case "ogg":
        return "audio/ogg";
      case "webm":
        return "audio/webm";
      case "aac":
        return "audio/aac";
      case "flac":
        return "audio/flac";
      default:
        return "application/octet-stream"; // fallback for unknown types
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      const pieces = file.name.split(".");
      const extension = pieces[pieces.length - 1];
      const contentType = extensionToContentType(extension);

      await uploadToBackend(file, contentType);
    } catch (error) {
      console.error("Error processing file upload:", error);
      setError("Failed to upload file. Please try again.");
    }
  };

  const handleTextSubmit = (text: string) => {
    // Handle text submission similar to audio
    console.log("Text submitted:", text);
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white rounded-xl overflow-hidden shadow-xl animate-fadeIn">
        <div className="relative px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-50"></div>
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Turn Your Voice into Action Against Asylum Changes
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4 leading-relaxed">
              Record a voice note about how the asylum changes affect you. We'll
              transcribe it, help you craft a powerful email, and enable you to
              lobby your MP with your unique story.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              No writing required. Just speak your truth, and we'll handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-900">How It Works</CardTitle>
          <CardDescription className="text-slate-700">
            Three simple steps to make your voice heard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg text-slate-800 mb-2">
                Record Your Voice Note
              </h3>
              <p className="text-slate-600">
                Share your personal experience with the asylum system in your own words.
                Record directly in your browser or upload an audio file.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg text-slate-800 mb-2">
                We Transcribe & Draft
              </h3>
              <p className="text-slate-600">
                Our AI transcribes your recording and helps transform it into a
                well-structured email that powerfully communicates your message.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg text-slate-800 mb-2">
                Send Your Unique Lobby
              </h3>
              <p className="text-slate-600">
                Review and send a personalized email to your MP. Each message is unique,
                based on your own story—making your lobbying more impactful.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submission Section */}
      <Card>
        <CardHeader>
          <CardTitle>Information about you</CardTitle>
          <CardDescription>
            We won't store your personal information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Your Name (required)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-1">
              <label
                htmlFor="postcode"
                className="block text-sm font-medium text-slate-700"
              >
                Your Postcode (optional)
              </label>
              <div className="text-xs">
                Postcode is needed to send an email to your MP.
              </div>
              <input
                type="text"
                id="postcode"
                name="postcode"
                placeholder="e.g. SW1A 1AA"
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      {name.trim().length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Share Your Story</CardTitle>
            <CardDescription>
              Record or upload a voice note (up to 5 minutes). We'll transcribe it and help you create a personalized email to your MP.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                variant={activeTab === "record" ? "primary" : "outline"}
                onClick={() => setActiveTab("record")}
                icon={<Mic className="h-5 w-5" />}
              >
                Record Directly
              </Button>
              <Button
                variant={activeTab === "upload" ? "primary" : "outline"}
                onClick={() => setActiveTab("upload")}
                icon={<Upload className="h-5 w-5" />}
              >
                Upload Audio File
              </Button>
              {/* <Button 
              variant={activeTab === 'text' ? 'primary' : 'outline'}
              onClick={() => setActiveTab('text')}
              icon={<HelpCircle className="h-5 w-5" />}
            >
              Text Submission
            </Button> */}
            </div>

            {activeTab === "record" && (
              <AudioRecorder onRecordingComplete={handleRecordingComplete} />
            )}

            {activeTab === "upload" && (
              <AudioUploader onFileUpload={handleFileUpload} />
            )}

            {activeTab === "text" && (
              <TextSubmission onSubmit={handleTextSubmit} />
            )}
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-red-500">
          <CardHeader>
            <CardTitle className="text-red-500">Error</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
        </Card>
      )}

      {/* Tips Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-4">
        <div className="shrink-0">
          <HelpCircle className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h3 className="font-medium text-blue-800 mb-1">
            Tips for a great submission
          </h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
            <li>Speak clearly and at a normal pace</li>
            <li>Share your personal experiences with the benefits system</li>
            <li>Explain how the proposed changes would affect you</li>
            <li>Mention any alternatives that you think would work better</li>
            <li>Recordings cannot be longer than 5 minutes</li>
          </ul>
        </div>
      </div>

      {/* Note: The following sections can be manually modified in the code */}
      {/* Important Questions to Consider: Lines 280-310 */}
      {/* How It Works: Lines 313-359 */}
      {/* Why Speaking Up Matters: Lines 362-386 */}
    </div>
  );
};

export default HomePage;
