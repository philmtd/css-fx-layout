import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pure SCSS implementation',
    Svg: require('@site/static/img/undraw_static_website.svg').default,
    description: (
      <>
        No JavaScript and no dependencies required. You can add this to any project.
      </>
    ),
  },
  {
    title: 'Use attribute or class selectors',
    Svg: require('@site/static/img/undraw_decide.svg').default,
    description: (
      <>
        css-fx-layout supports using either attribute selectors like <code>data-layout="row"</code> or class selectors
          like <code>.fx-layout-row</code>.
      </>
    ),
  },
  {
    title: 'Inspired by Angular Flex-Layout',
    Svg: require('@site/static/img/undraw_forming_ideas.svg').default,
    description: (
      <>
        This library is inspired by Angular's <a href="https://github.com/angular/flex-layout" rel="noreferrer noopener" target="_blank">Flex-Layout</a> and can replace
          most of the popular functions of the (by now deprecated) library.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
