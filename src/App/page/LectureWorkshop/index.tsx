import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// import 'highlight.js/styles/github.css';
import stylesMarkdown from "./Markdown.module.css";

import Footer from "../../component/Footer";
import { useState } from "react";

import "./index.css";

const getMD = async (path: string) => {
  return fetch(path)
    .then((res) => res.text())
    .then((md) => {
      return md;
    });
};

const LectureWorkshop = () => {
  // const url = `https://raw.githubusercontent.com/NamjuLee/data/master/works/sample/${51}.jpg`;
  // const url = `https://raw.githubusercontent.com/NamjuLee/data/master/geometry/pointGrid/pointGrid-1.png`;
  const url = `https://raw.githubusercontent.com/NamjuLee/data/master/works/geometry/curvature.png`;
  // const url = `https://raw.githubusercontent.com/NamjuLee/data/master/works/sample/18.jpg`;
  // const url = `https://raw.githubusercontent.com/NamjuLee/data/master/works/sample/53.jpg`;

  const bgStyle = {
    background: "rgba(0,0,0, 0.75)",
    backgroundBlendMode: "multiply",
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center", // Math.random() < 0.5 ? 'center center' : '',
  };

  const [dataMD, setDataMD] = useState("");
  const fetchData_HarvardGSD = async () => {
    setDataMD(
      await getMD(
        `https://namjulee.github.io/njs-lab-public/md/project/2025-introductionToDesignComputation.md`
      )
    );
  };
  fetchData_HarvardGSD();

  let firstImageSkipped = false;

  return (
    <div>
      {/* <div className='data-design-container'> */}
      <div style={bgStyle}>
        <div className="text-center">
          <h2 className="title-sub">Introduction to Computation for design</h2>
          <h1 className="title">Data in Design</h1>
        </div>
        {/* </div> */}

        <div className="lecture-workshop-center">
          <p>
            <a href="https://namjulee.github.io/njs-lab-public/nj-namju-lee">
              Instructor: NJ Namju Lee
            </a>
          </p>
          <a
            className="git-icon"
            href="https://github.com/NamjuLee/data-in-design"
          >
            <i className={"fa"}>&#xf09b;</i>
          </a>

          <p>
            SHORT DESCRIPTION: This course contains several introductory
            lectures and hands-on workshops for those who want to use data as
            design materials to develop and code the design process. We will
            gently visit the basic concepts and implementations of the topics:
            Code, Data and processing, Geometry data, Vector, Raster, and some
            machine learning models and their related technologies, such
            examples: Regression, Classification, Pattern, Data Representation,
            Dimensionality Reduction, Machine Learning, Deep Learning,
            Implementation, Mapping, and Visualization Methodologies. From the
            designer's perspective, students will better understand and
            implement the use of data and tools, finally, gain holistic
            high-level concepts to expand that knowledge and technology further.
            Therefore, the ideas and contents you will learn in this course
            could become a map for those who want to learn how to use data and
            digital media in design. Each day, students will learn the
            individual topics listed below. Then, students will make a group to
            discuss, help, understand, and finish homework and examples. All
            code and examples will be online, and the instructor will be
            available before and after class for troubleshooting. In addition,
            it is also possible for an individual or group to focus on one of
            the primary topics and revisit other topics after the course based
            on the student's ability and expectations. It is yours if you are
            interested in data as a design material.
          </p>

          <p>
            This material is provided solely for educational and research
            purposes. It should not be used for commercial or production
            activities.
          </p>
          <p>
            Please note that the schedule may be adjusted to align with
            students' needs and the time available.
          </p>
        </div>
      </div>

      <div className="lecture-workshop-bg">
        <div className="lecture-workshop-center">
          <ReactMarkdown
            className={stylesMarkdown.markdownContent}
            components={{
              img: ({ node, ...props }) => {
                if (!firstImageSkipped) {
                  firstImageSkipped = true;
                  return null;
                }
                return <img {...props} />;
              },
              h1: ({ node, ...props }) => (
                // eslint-disable-next-line jsx-a11y/heading-has-content
                <h1
                  id={props.children
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-")}
                  className={stylesMarkdown.heading}
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2 className={stylesMarkdown.textH2} {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h2 className={stylesMarkdown.textH3} {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h2 className={stylesMarkdown.textH4} {...props} />
              ),
              h5: ({ node, ...props }) => (
                <h2 className={stylesMarkdown.textH5} {...props} />
              ),
              h6: ({ node, ...props }) => (
                <h6 className={stylesMarkdown.textH6} {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className={stylesMarkdown.paragraph} {...props} />
              ),
              a: ({ node, ...props }) => (
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a className={stylesMarkdown.link} {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className={stylesMarkdown.list} {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className={stylesMarkdown.paragraph} {...props} />
              ),
  
              code: ({ node, inline, className, ...props }) => {
                if (inline) {
                  // Inline code (e.g., `code`)
                  return (
                    <code className={`${stylesMarkdown.inlineCode}`} {...props} />
                  );
                }
                // Block code (e.g., ```code```)
                return (
                  <pre className={stylesMarkdown.codeBlock}>
                    <code {...props} />
                  </pre>
                );
              },
            }}
            children={dataMD}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>

      <Footer mode="dark" />
    </div>
  );
};
export default LectureWorkshop;
