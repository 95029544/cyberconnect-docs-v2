import React from 'react';
import styles from './styles.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { DiNpm } from 'react-icons/di';
import { CgWebsite } from 'react-icons/cg';

type UrlItem = {
  icon: any;
  url: string;
}

type ProjectItem = {
  title: string;
  urls: Array<UrlItem>;
};

const ProjectList: ProjectItem[] = [
  {
    title: 'CyberConnect SDK',
    urls: [
      {
        icon: <AiFillGithub />,
        url: "https://github.com/cyberconnecthq/js-cyberconnect/"
      },
      {
        icon: <DiNpm />,
        url: "https://www.npmjs.com/package/@cyberlab/cyberconnect/"
      },
    ]
  },
  {
    title: 'Social Verifier',
    urls: [
      {
        icon: <AiFillGithub />,
        url: "https://github.com/cyberconnecthq/social-verifier/"
      },
      {
        icon: <DiNpm />,
        url: "https://www.npmjs.com/package/@cyberlab/social-verifier/"
      },
    ]
  },
  {
    title: 'CyberConnect Connect List',
    urls: [
      {
        icon: <AiFillGithub />,
        url: "https://github.com/cyberconnecthq/connect-list/"
      },
    ]
  },
  {
    title: 'CyberConnect API Starter Demo',
    urls: [
      {
        icon: <AiFillGithub />,
        url: "https://github.com/cyberconnecthq/cyberconnect-starter/"
      },
      {
        icon: <CgWebsite />,
        url: "https://cyberconnect-start.netlify.app/"
      },
    ]
  },
  {
    title: 'CyberGraph Explorer Demo',
    urls: [
      {
        icon: <AiFillGithub />,
        url: "https://github.com/cyberconnecthq/CyberGraph/"
      },
      {
        icon: <CgWebsite />,
        url: "https://cyber-graph.vercel.app/"
      },
    ]
  },
];

function ProjectCard({title, urls}: ProjectItem) {
  return (
    <div className={`card ${styles.projectCard}`}>
      <div className={`cardTitle ${styles.projectCardTitle}`}>
        <div>{title}</div>
      </div>
      {urls.map((elem, idx) => (
        <div key={idx}>
          <a href={elem.url} className={styles.projectCardUrl} target="_blank">
            <div className={styles.projectCardIcon}>{elem.icon}</div>
            <div>{elem.url}</div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default function ProjectCards(): JSX.Element {
  return (
    <div>
      {ProjectList.map((props, idx) => (
        <ProjectCard key={idx} {...props} />
      ))}
    </div>
  );
}