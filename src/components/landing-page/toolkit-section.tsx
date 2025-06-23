import { Button } from "@/components/ui/button";
import { FileText, Users } from "lucide-react";

export default function ToolkitSection() {
  return (
    <section className="py-8 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-start">
          <div className="col-span-1">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium  mb-2 lg:mb-6 leading-tight">
              The Complete
              <br />
              Career Toolkit at
              <br />
              Your Fingertips
            </h2>
          </div>
          <div className="col-span-1 flex h-full">
            <div className="place-self-end mb-6">
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 text-balance leading-relaxed max-w-xl">
                We understand that building a successful career requires a
                comprehensive approach. That's why we offer a wide range of
                AI-powered tools and resources to help you excel in your job
                search and professional development.
              </p>
              {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg">
                Create new resume
              </Button> */}
            </div>
          </div>
        </div>

        <div className="space-y-8 mt-16">
          <hr className="border-white" />
          <div className="flex flex-col md:flex-row items-center md:justify-between px-4 sm:px-8 space-y-8 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#fe7a42] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                  Curriculum Vitae
                </span>
                <span className="text-gray-500 ml-2 text-xl sm:text-2xl">01</span>
              </div>
            </div>
            <div className="text-4xl sm:text-5xl text-white hidden md:block">→</div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                  Cover letter
                </span>
                <span className="text-gray-500 ml-2 text-xl sm:text-2xl">02</span>
              </div>
            </div>
          </div>
          <hr className="border-white" />
        </div>
      </div>
    </section>
  );
}
