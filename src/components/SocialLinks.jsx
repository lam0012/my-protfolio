import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ExternalLink,
} from "lucide-react";
import { Telegram, WhatsApp } from "@mui/icons-material";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/zlatko-agovic-1971ba36b/",
    color: "#0a66c2",
    gradient: "from-[#0a66c2] to-[#377abd]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "ZlatkoAgovic",
    icon: Github,
    url: "https://github.com/kakao74",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Telegram",
    displayName: "Telegram",
    subText: "ZlatkoAgovic",
    icon: Telegram,
    url: "https://web.telegram.org/k/#@darkhorse0419",
    color: "#0866ff",
    gradient: "from-[#0866ff] to-[#428aff]",
  },
  {
    name: "WhatsApp",
    displayName: "WhatsApp -- +381 62 9233387",
    subText: "ZlatkoAgovic",
    icon: WhatsApp,
    url: "",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);
  const [instagram, facebook, github] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500"
        >
          {/* Hover Gradient Background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r ${linkedIn.gradient}`}
          />

          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        {/* Second Row - Instagram & X */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 p-4 rounded-xl 
                   bg-white/5 border border-white/10 overflow-hidden
                   hover:border-white/20 transition-all duration-500"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r from-[#000000] to-[#000]`}
            />

            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                           group-hover:scale-125 group-hover:opacity-30"
                style={{ backgroundColor: "#fff" }}
              />
              <div className="relative p-2 rounded-lg transition-all duration-500 group-hover:scale-110">
                {
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 71 55"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M60.104 4.552A58.26 58.26 0 0 0 46.852.8a.117.117 0 0 0-.124.06c-2.048 3.614-4.096 8.29-5.616 12.07-6.656-.988-13.12-.988-19.712 0-1.52-3.78-3.568-8.456-5.616-12.07A.117.117 0 0 0 15.1.8 58.234 58.234 0 0 0 1.896 4.552a.105.105 0 0 0-.048.041C-3.432 13.23-5.48 21.72-4.96 30.16a.112.112 0 0 0 .04.082c6.08 4.464 12.008 7.18 17.848 8.96a.117.117 0 0 0 .128-.045c1.376-1.888 2.608-3.872 3.68-5.952a.112.112 0 0 0-.065-.16c-1.952-.744-3.808-1.656-5.6-2.72a.117.117 0 0 1-.012-.195c.376-.28.752-.568 1.12-.864a.112.112 0 0 1 .118-.013c11.752 5.376 24.448 5.376 36.16 0a.112.112 0 0 1 .12.013c.368.296.744.584 1.12.864a.117.117 0 0 1-.012.195c-1.792 1.064-3.648 1.976-5.6 2.72a.112.112 0 0 0-.064.16c1.072 2.08 2.304 4.064 3.68 5.952a.117.117 0 0 0 .128.045c5.872-1.78 11.8-4.496 17.848-8.96a.112.112 0 0 0 .04-.082c.56-8.44-1.488-16.93-6.944-25.567a.105.105 0 0 0-.048-.041ZM23.728 37.52c-3.568 0-6.488-3.264-6.488-7.28 0-4.016 2.888-7.28 6.488-7.28 3.624 0 6.52 3.28 6.488 7.28 0 4.016-2.888 7.28-6.488 7.28Zm23.544 0c-3.568 0-6.488-3.264-6.488-7.28 0-4.016 2.888-7.28 6.488-7.28 3.624 0 6.52 3.28 6.488 7.28 0 4.016-2.864 7.28-6.488 7.28Z"
                      />
                    </g>
                  </svg>
                }
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                Discord
              </span>
              <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                Zlatko Agovic
              </span>
            </div>

            <ExternalLink
              className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                 opacity-0 group-hover:opacity-100 transition-all duration-300
                                 transform group-hover:translate-x-0 -translate-x-2"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
              />
            </div>
          </a>
          {[instagram].map((link) => (
            <a
              key={link.name}
              href={link.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Third Row - GitHub & Facebook */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[facebook, github].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
