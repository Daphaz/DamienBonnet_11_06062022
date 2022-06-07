import { DropDown } from '../common';
import { Layout } from '../layout';

export const AboutTemplate = () => {
  return (
    <Layout>
      <section className='about__hero'>
        <img src='/images/bg-hero-about.webp' alt='Hero about' />
      </section>

      <div className='about__warp'>
        <section className='about__section'>
          <DropDown label='Fiabilité'>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </DropDown>
        </section>
        <section className='about__section'>
          <DropDown label='Respect'>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </DropDown>
        </section>
        <section className='about__section'>
          <DropDown label='Service'>
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </DropDown>
        </section>
        <section className='about__section'>
          <DropDown label='Sécurité'>
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </DropDown>
        </section>
      </div>
    </Layout>
  );
};
