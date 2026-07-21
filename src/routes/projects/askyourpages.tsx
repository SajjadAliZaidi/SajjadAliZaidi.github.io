import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/askyourpages")({
  head: () => ({
    meta: [
      { title: "AskYourPages - Coming Soon" },
      { name: "description", content: "Ask your books anything. Get answers with page-level citations you can actually click through to." }
    ]
  }),
  component: AskYourPages,
});

function AskYourPages() {
  return (
    <>
      <style>{`
        .ayp-body {
            --bg-base: #0a0a0f;
            --bg-surface: #14141c;
            --text-primary: #e4e4e7;
            --text-secondary: #8b8b96;
            --accent: #3b82f6;
            --accent-hover: #60a5fa;
            --border: #26262f;
            
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg-base);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            line-height: 1.6;
            margin: 0;
            box-sizing: border-box;
        }

        .ayp-body * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .ayp-container {
            max-width: 560px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .ayp-badge {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--accent);
            background-color: rgba(59, 130, 246, 0.1);
            border: 1px solid var(--border);
            padding: 0.375rem 1rem;
            border-radius: 9999px;
            margin-bottom: 1.5rem;
            display: inline-block;
        }

        .ayp-h1 {
            font-size: clamp(2.25rem, 5vw, 3.25rem);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.25rem;
            letter-spacing: -0.02em;
        }

        .ayp-h1 .ayp-accent {
            color: var(--accent);
        }

        .ayp-subhead {
            font-size: 1.125rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            max-width: 90%;
        }

        .ayp-divider {
            width: 48px;
            height: 4px;
            background-color: var(--accent);
            border-radius: 2px;
            margin: 0 auto 2rem;
        }

        .ayp-detail {
            font-size: 1rem;
            color: var(--text-primary);
            font-weight: 500;
        }

        .ayp-footer {
            margin-top: 4rem;
            font-size: 0.875rem;
            color: var(--text-secondary);
        }

        .ayp-footer a {
            color: inherit;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .ayp-footer a:hover {
            color: var(--accent-hover);
        }

        @media (max-width: 480px) {
            .ayp-body {
                padding: 1.5rem;
            }
            .ayp-subhead {
                max-width: 100%;
            }
        }
      `}</style>
      <div className="ayp-body">
          <div className="ayp-container">
              <div className="ayp-badge">Coming Soon</div>
              
              <h1 className="ayp-h1">Ask<span className="ayp-accent">Your</span>Pages</h1>
              
              <p className="ayp-subhead">
                  Ask your books anything. Get answers with page-level citations you can actually click through to.
              </p>
              
              <div className="ayp-divider"></div>
              
              <p className="ayp-detail">
                  Upload a PDF. Ask a question. Jump straight to the page that answers it.
              </p>
              
              <footer className="ayp-footer">
                  Built by <a href="/" rel="noopener noreferrer">Sajjad Ali Zaidi</a>
              </footer>
          </div>
      </div>
    </>
  );
}
