import React from "react";
import { Box, Typography } from "@mui/material";
import { Star, GraduationCap, BriefcaseBusiness, Award } from "lucide-react";

const HighlightItem = ({ highlight }) => {
  return (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
        {highlight}
      </span>
    </li>
  );
};
const Qualifications = () => {
  const qualifications = [
    {
      type: "Education",
      entries: [
        {
          title: "Master of Computer Applications (MCA)",
          institution: "ETF Nikola Tesla",
          year: "2012 - 2016"
        },
        {
          title: "Master of Computer Science (MSCS)",
          institution: "ETS Nikola Tesla",
          year: "2008 - 2012",
          // marks: "Marks: 69%",
        }
      ],
    },
    {
      type: "Experience",
      entries: [
        {
          title: "Sr. Web Developer",
          company: "Mouche, United States",
          year: "02-2020 - Present",
        },
        {
          title: "Front-End Web Developer (Intern)",
          company: "eHouse studio, United Kingdom",
          year: "11-2018 - 01-2020",
        },
        {
          title: "Data Entry Operator & Accountant",
          company: "Cambridge International College (Uk, Distance Learning)",
          year: "05-2017 - 10-2018",
        },
        {
          title: "Lecturer in Computer Science",
          company: "ARDEM",
          year: "05-2016 - 04-2017",
        },
      ],
    },
    {
      type: "Certificates",
      entries: [
        {
          title: "Shopify Development | Yettle",
          year: "2017 - 2024",
        },
        {
          title: "Developer | Tehnomanija",
          year: "2012 - 2016",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 3, md: 5 },
        width: "100%",
      }}
    >
      {/* First Column: Experience */}
      <Box>
        {qualifications
          .filter((qual) => qual.type === "Experience")
          .map((qual, index) => (
            <Box
              key={qual.type}
              sx={{
                // mt: { xs: 1, md: 0 }, // Reduce margin-top for small screens
                mb: { xs: 0, md: 3 }, // Reduce margin-bottom for small screens
              }}
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <BriefcaseBusiness className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  {qual.type}
                </h3>

                <div className="space-y-4">
                  {qual.entries.map((entry, entryIndex) => (
                    <div
                      key={entryIndex}
                      className="group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="relative mt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300" />
                        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="space-y-2">
                        <Typography
                          variant="h6"
                          sx={{ color: "#fff", fontWeight: 500 }}
                          className="text-white group-hover/title:text-white transition-colors"
                        >
                          {entry.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#94a3b8" }}
                          className="text-gray-300 group-hover/title:text-white transition-colors"
                        >
                          {entry.company} <br /> {entry.year}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          ))}
      </Box>

      {/* Second Column: Education and Certificates */}
      <Box>
        {qualifications
          .filter((qual) => qual.type === "Education" || qual.type === "Certificates")
          .map((qual, index) => (
            <Box
              key={qual.type}
              sx={{
                mb: { xs: 3, md: 3 }, // Reduce margin-bottom for small screens
              }}
              data-aos="fade-up-left"
              data-aos-duration="1200"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  {qual.type === "Education" ? (
                    <GraduationCap className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  ) : (
                    <Award className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  )}
                  {qual.type}
                </h3>

                <div className="space-y-4">
                  {qual.entries.map((entry, entryIndex) => (
                    <div
                      key={entryIndex}
                      className="group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="relative mt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300" />
                        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="space-y-2">
                        <Typography
                          variant="h6"
                          sx={{ color: "#fff", fontWeight: 500 }}
                          className="text-white group-hover/title:text-white transition-colors"
                        >
                          {entry.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#94a3b8" }}
                          className="text-gray-300 group-hover/title:text-white transition-colors"
                        >
                          {entry.institution} <br /> {entry.year}
                          {entry.marks && <br />}
                          {entry.marks}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
export default Qualifications;