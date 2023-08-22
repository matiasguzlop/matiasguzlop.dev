import React from 'react';

import { Body, Entry, Footer, Link } from './ProjectEntry.style.js';

function ProjectEntry ({ project }) {
  const createHtmlBody = () => ({
    __html: project.body
  });

  return (
      <Entry>
          <Body>
              <h2>{project.title}</h2>
              {project.url &&
              <Link rel='noreferrer' href={project.url} target='_blank'>
                  🔗
              </Link>
                }
              <h5>{project.company}</h5>
              <p dangerouslySetInnerHTML={createHtmlBody()}></p>
          </Body>
          {project.techs &&
          <Footer>
              <span>{project.techs}</span>
          </Footer>
          }
      </Entry>
  );
}

export default ProjectEntry;
