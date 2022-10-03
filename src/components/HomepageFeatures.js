import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Desarrollada con Docusaurus',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus permite generar una web de forma rápida y sencilla. Esta web está enfocada 		a documentación, pero también permite hacer otros tipos como Blog. Trabaja con ficheros escritos en el lenguaje React o MarkDown.
      </>
    ),
  },
  {
    title: 'Enfocado al mundo del código abierto',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
	Este proyecto estará totalmente enfocado al mundo del software libre y código abierto. 		Aunque habrá manuales de software privado, aquí no se pondrá precio por la información, códigos o manuales.
      </>
    ),
  },
  {
    title: 'Desarrollado con tecnologias abiertas',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Este proyecto es posible gracias al mundo del software libre y código abierto. Aquí se 		hace uso de proyectos como React, MarkDown, JavaScript… También debo agradecer a QuantCDN por ofrecerme un alojamiento gratuito para poder almacenar mi proyecto.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
