
import Home from "@/components/Home"
import Projects from "@/components/Projects"

import AboutMe from "@/components/AboutMe"
import Contact from "@/components/Contact"
import MoreProjects from "@/components/MoreProjects"
import { Languages } from "@/components/Languages"
import { useTranslations } from "next-intl"

export default function Page() {

  const t = useTranslations('Index');
  const p = useTranslations('Projects');
  const par = useTranslations('AboutMe');
  const mystack = useTranslations('MyStack');
  const download = useTranslations('Download');
  const c = useTranslations('Contact');

  return (
    <main className="main-container min-h-[100vh]  w-full flex flex-col items-center justify-center ">
      <Languages />
      <Home
        button={t("button")}
        contactButton={t("contactButton")}
        homeTitle={t("home_title")}
        homeDescription={t("home_description")}
      />
      <Projects
        title={p("title")}
        contactButton={p("contactButton")}
      />
      <MoreProjects />
      <AboutMe
        title={par("title")}
        firstParagraph={par("firstParagraph")}
        secondParagraph={par("secondParagraph")}
        thirdParagraph={par("thirdParagraph")}
        fourthParagraph={par("fourthParagraph")}
        fifthParagraph={par("fifthParagraph")}
        sixthParagraph={par("sixthParagraph")}
        seventhParagraph={par("seventhParagraph")}
        mystackTitle={mystack("mystackTitle")}
        description={mystack("description")}
        download={download("download")}
        downloadButton={download("downloadButton")}
      />
      <Contact
        title={c("title")}
        socialMedia={c("socialMedia")}
      />
    </main>
  )
}
