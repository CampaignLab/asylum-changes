import React from "react";
import { FileText, Shield, Database, LightbulbIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-800">
          About the Asylum Changes
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          The UK government has announced significant changes to the asylum and
          immigration system. This page explains what this means and why your
          voice matters.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <LightbulbIcon className="h-5 w-5 mr-2 text-yellow-500" />
            Why Did We Build This?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 leading-relaxed">
            As immigrants to the UK, we understand firsthand the challenges
            within the system. We created this platform to provide a
            constructive way to engage with the proposed changes to the system
            and enable others to do the same. We believe that by making it
            easier to write to your MP to protest the proposed changes, we can
            increase participation and reduce the potential negative impact of
            the changes on people's lives, many of whom are fleeing persecution.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-600" />
            Key Asylum System Changes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ProposalItem
              title="Makes refugee status temporary, reviewed every 30 months"
              description="It forces people to live in permanent fear of being sent back to danger. No one can recover from trauma or rebuild a stable life when their safety is repeatedly put at risk."
            />

            <ProposalItem
              title="Raises the wait for permanent settlement from 5 years to 20"
              description="It keeps people in limbo for decades, preventing them from putting down roots, planning for the future, or feeling like they belong in the country where they live, work, and contribute."
            />

            <ProposalItem
              title="Creates a work/study route that is the only path to family reunion"
              description="It punishes people who are traumatised, disabled, or not yet able to work full-time. It separates families for years, or even permanently and treats loved ones as rewards for productivity."
            />

            <ProposalItem
              title="Replaces multiple appeals with one single appeal."
              description="People fleeing persecution often can’t disclose everything at once due to trauma or fear. A one-shot appeal will lead to wrongful refusals and risk returning people to torture or death."
            />
            <ProposalItem
              title="Introduces a new appeals body while narrowing Article 8 rights"
              description="Weakening family-life protections makes it harder for people with genuine ties like partners, long-standing relationships, wider family carers, to remain safely with the people they depend on."
            />
            <ProposalItem
              title="Allows only immediate relatives (children/parents) to stay on family-life grounds and prioritises removals."
              description="It breaks apart real families, ignores cultural definitions of family, and risks deporting people who have built strong, positive lives here simply to meet removal targets."
            />

            <ProposalItem
              title="Narrows Article 3 protections against inhuman or degrading treatment."
              description="Article 3 is one of the most fundamental human rights. Weakening it increases the risk that people will be sent back to torture, imprisonment, or abuse."
            />

            <ProposalItem
              title="Tightens Modern Slavery rules so late disclosures are “less credible.”"
              description="Survivors of trafficking often cannot disclose abuse immediately due to trauma, fear of reprisals, or control by traffickers. This rule will deny protection to genuine victims."
            />

            <ProposalItem
              title="Ends the legal duty to provide asylum support, removing housing and basic financial help for many."
              description="People who are not allowed to work rely on this support to survive. Removing it will create mass destitution, homelessness, and exploitation, including by traffickers."
            />

            <ProposalItem
              title="Denies support to people judged to have ‘made themselves destitute.’"
              description="This is subjective and punishes people for circumstances they cannot control. It risks leaving vulnerable people, including torture survivors, with absolutely nothing."
            />

            <ProposalItem
              title="Requires asylum seekers with assets to pay for accommodation; cars/e-bikes may be seized."
              description="Many people bring small savings for survival or to support family abroad. Seizing essential items like transport pushes people further into poverty and isolation."
            />

            <ProposalItem
              title="Ends support for refused-asylum families before their youngest child turns 18."
              description="Children will be the ones harmed and pushed into homelessness, hunger, and instability because of decisions they had no control over."
            />

            <ProposalItem
              title="Imposes visa penalties on countries that don’t accept returns."
              description="Political pressure on foreign governments will not fix the system - it simply harms ordinary families who need visas for work, study, or family visits."
            />

            <ProposalItem
              title="Expands AI age-assessment tools for children."
              description="AI cannot safely determine age. Misclassification will treat children as adults, placing them at risk of harm, exploitation, and inappropriate accommodation."
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-blue-600" />
            Privacy and Trust Concerns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">
            We understand the concerns about AI and data usage. Here's how we
            protect your privacy:
          </p>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">1.</span>
              <p>
                We've invested in paid AI licensing to ensure your data isn't
                used for training purposes. As disabled developers ourselves,
                we've prioritized privacy over profit.
              </p>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">2.</span>
              <p>
                Your content is temporary - we only store it in your browser
                session. Once you close your browser or leave the site,
                everything you have done is discarded. Our goal is to support
                disabled people, not to collect personal data. We are collecting
                some metadata, see next part.
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="h-5 w-5 mr-2 text-blue-600" />
            What Data Do We Collect?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">
            We may (based on if we have time to develop this) collect the
            following limited data when functionality is implemented:
          </p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start">
              <span className="font-medium mr-2">1.</span>
              <p>
                A unique ID for each AI interaction to track total consultation
                responses
              </p>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">2.</span>
              <p>
                Submission timestamps to understand when people are engaging
              </p>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">3.</span>
              <p>
                Word count metrics (input and output) to monitor AI performance.
                Not the words you submitted, just a tool to count how many.
              </p>
            </li>
          </ul>
          <p className="text-slate-600 mt-4">
            While we won't share individual data, we hope to share aggregate
            insights about our collective impact on the consultation process.
            Together, we can make a difference.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

interface ProposalItemProps {
  title: string;
  description: string;
}

const ProposalItem: React.FC<ProposalItemProps> = ({ title, description }) => {
  return (
    <div className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
      <h3 className="font-medium text-lg text-slate-800 mb-1">{title}</h3>
      <p className="text-slate-600">
        <i>Why it's wrong:</i>&nbsp;
        {description}
      </p>
    </div>
  );
};

export default AboutPage;
