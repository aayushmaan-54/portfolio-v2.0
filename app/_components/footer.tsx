import { Envelope, GitHubMinimal, Globe, LinkedInMinimal, Twitter_X } from "@/assets/icons/svg-icons";


export default function Footer() {

  return (
    <>
      <footer className="flex items-center justify-between mx-5 mb-5 mt-22">
        <div className="flex items-center gap-5">
          <a href=""><GitHubMinimal className="text-dark-accent/75 size-5" /></a>
          <a href=""><LinkedInMinimal className="text-dark-accent/75 size-5" /></a>
          <a href=""><Twitter_X className="fill-dark-accent/75 size-5" /></a>
          <a href=""><Envelope className="fill-dark-accent/75 size-5" /></a>
          <a href=""><Globe className="stroke-dark-accent/75 size-5" /></a>
        </div>

        <div className="flex items-center gap-3">
          <a href="" className="text-dark-accent text-opacity-75">Home</a>
          <a href="" className="text-dark-accent text-opacity-75">Projects</a>
          <a href="" className="text-dark-accent text-opacity-75">Resumé</a>
          <a href="" className="text-dark-accent text-opacity-75">Education</a>
          <a href="" className="text-dark-accent text-opacity-75">Contact</a>
          <a href="" className="text-dark-accent text-opacity-75">Blog</a>
        </div>
      </footer>
    </>
  );
}