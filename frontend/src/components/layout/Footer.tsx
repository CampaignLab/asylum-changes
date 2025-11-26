import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold border-b border-blue-700 pb-2">
              About This Project
            </h3>
            <p className="text-sm leading-relaxed">
              This platform helps people affected by UK immigration and asylum
              changes share their voice. Created by concerned citizens.
            </p>
          </div>
        </div>

        <div className="mt-2 border-t border-blue-800 text-sm text-center">
          <p className="text-sm pt-2 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for
            fairness in the UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
