import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <h1 className="text-white text-3xl p-20">
        Project Not Found
      </h1>
    );
  }

  return (
    <section className="bg-zinc-950 min-h-screen text-zinc-50 py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-black">
          {project.title}
        </h1>

        <div className="flex gap-8 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              px-5 py-3
              rounded-full
              bg-zinc-900
              border border-zinc-800
              hover:border-zinc-700
              text-blue-400
              font-medium
            "
          >
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                px-5 py-3
                rounded-full
                bg-zinc-900
                border border-zinc-800
                hover:border-zinc-700
                text-green-400
                font-medium
              "
            >
              Live Demo
            </a>
          )}
        </div>

        <div
          className="
            prose
            prose-invert
            prose-zinc
            max-w-none
            mt-20

            prose-headings:text-white
            prose-h1:text-5xl
            prose-h2:text-3xl
            prose-h3:text-2xl

            prose-p:text-zinc-300
            prose-li:text-zinc-300

            prose-strong:text-white

            prose-code:text-green-400
            prose-pre:bg-zinc-900
            prose-pre:border
            prose-pre:border-zinc-800

            prose-a:text-blue-400
            prose-a:no-underline
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >
            {project.readme}
          </ReactMarkdown>
        </div>

      </div>
    </section>
  );
}