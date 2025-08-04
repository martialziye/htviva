import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const MentionsLegalesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-8 text-center">
            Mentions Légales
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            {/* ÉDITEUR */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">ÉDITEUR</h2>
              <div className="text-gray-700 space-y-2">
                <p>Ce site est édité par la société HTVIVA</p>
                <p>21 rue Marcel Pagnol – 69 694 Vénissieux cedex</p>
                <p className="mt-4">HTVIVA est une SAS au capital de 1 449 560 €</p>
                <p>RCS de Lyon N° 71BOO196</p>
                <p>N° TVA intracommunautaire FR 48-97150960</p>
                <p>Responsable de la publication : HTVIVA</p>
                <p className="mt-4">HTVIVA est une société du groupe WISETEC</p>
                <p>Directeur de la publication : Service Communication</p>
              </div>
            </section>

            {/* RESPONSABILITÉ */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">RESPONSABILITÉ</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Le contenu du présent site a été compilé avec le plus grand soin. Toutefois, la société HTVIVA ne peut garantir le caractère opportun, exact, complet ou la qualité des informations accessibles. Elle ne peut, en aucune circonstance, être tenue pour responsable des dommages de toute nature résultant de l'utilisation ou du non-usage des informations présentées, dans la mesure où il n'y a aucune intention délibérée ou faute grave de la part de la direction de HTVIVA.
                </p>
                <p>
                  HTVIVA se réserve le droit de modifier, compléter ou supprimer tout ou partie du contenu du présent site, et ce, en tout temps et sans préavis.
                </p>
              </div>
            </section>

            {/* DROITS DE PROPRIÉTÉ */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">DROITS DE PROPRIÉTÉ</h2>
              <div className="text-gray-700">
                <p>
                  Les créations de ce site appartiennent à HTVIVA. La reproduction totale ou partielle, la diffusion ou publication, la retransmission, la modification ou toute autre utilisation de ce site (par électronique ou d'autres moyens) à des fins d'usage public ou commercial sans l'autorisation préalable de HTVIVA, sont strictement interdites.
                </p>
              </div>
            </section>

            {/* POLITIQUE DE CONFIDENTIALITÉ */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">POLITIQUE DE CONFIDENTIALITÉ – mise à jour le 06/06/2018</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  HTVIVA lutte pour le respect du droit fondamental qu'est le droit à la vie privée. C'est pourquoi, nous nous engageons à respecter la confidentialité de vos données à caractère personnel. En visitant le site internet de HTVIVA, vous acceptez les dispositions de la présente politique de confidentialité.
                </p>
                <p>
                  Lisez attentivement ce qui suit pour comprendre quelles informations sont collectées, quels sont vos droits et comment vos données sont utilisées par HTVIVA.
                </p>
              </div>
            </section>

            {/* LEGISLATION */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">LEGISLATION</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Nous collectons, traitons et utilisons vos données dans le cadre de la correspondance avec HTVIVA et de l'exécution de transactions commerciales. La base juridique en est l'article 6, alinéa 1, lit. b) et c) RGPD.
                </p>
                <p>
                  Pour certains services de HTVIVA, par exemple l'envoi de newsletter, nous avons besoin de votre consentement au sens de l'article 6, alinéa 1, lit. a) et de l'article 7 RGPD.
                </p>
                <p>
                  Dans ce cas, la base juridique du traitement est l'article 6, alinéa 1, lit a) RGPD. Vous avez le droit de révoquer votre consentement à tout instant. La révocation du consentement n'affecte pas la légalité du traitement effectué en vertu du consentement donné jusqu'à la révocation (article 7, alinéa 3 RGPD). Nous traitons vos données aux fins auxquelles elles ont été collectées.
                </p>
              </div>
            </section>

            {/* QUELS RENSEIGNEMENTS COLLECTE HTVIVA */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">QUELS RENSEIGNEMENTS COLLECTE HTVIVA ?</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Les informations collectées sont exclusivement destinées aux services communication et clients de HTVIVA. Aucune information personnelle collectée sur notre site internet n'est cédée à des tiers.
                </p>
                <p>
                  Nous ne collectons pas les données à caractère personnel des catégories particulières visées à l'article 9, alinéa 1 RGPD dans le cadre de l'utilisation de ce site web et des processus de traitement susmentionnés.
                </p>
              </div>
            </section>

            {/* QUELS SONT VOS DROITS */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">QUELS SONT VOS DROITS ?</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Vos données sont conservées pendant les délais de conservation légaux afin de remplir nos obligations contractuelles et légales (article 17 RGPD). Conformément aux dispositions légales, vous pouvez exiger que nous effacions vos données à caractère personnel si aucun motif visé à l'article 17, alinéa 3 RGPD ne s'y oppose.
                </p>
                <p>
                  Vous avez le droit de nous demander de confirmer que nous traitons bien vos données à caractère personnel. Si tel est le cas, vous disposez d'un droit d'information à l'égard de ces données conformément à l'article 15, alinéa 1 RGPD.
                </p>
                <p>
                  Si nous avons enregistré des données à caractère personnel vous concernant qui sont incorrectes ou incomplètes, vous avez le droit d'exiger une correction immédiate de ces dernières (article 16 RGPD).
                </p>
                <p>
                  Sous certaines conditions, vous avez le droit d'exiger que nous limitions le traitement de vos données (voir article 18 RGPD).
                </p>
                <p>
                  Pour exercer ce droit, vous devez adresser votre demande par email à : <a href="mailto:contact@htviva.fr" className="text-brand-red hover:underline">contact@htviva.fr</a> ou par courrier à l'adresse suivante : HTVIVA – 21 rue Marcel Pagnol – 69 694 Vénissieux cedex – France.
                </p>
              </div>
            </section>

            {/* POLITIQUE DE COOKIES */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">QUELLE EST LA POLITIQUE DE HTVIVA EN MATIÈRE DE COOKIES ?</h2>
              <div className="text-gray-700">
                <p>
                  Outre les renseignements personnels que vous nous transmettez à des fins précises, HTVIVA utilise également des cookies pour assurer le bon fonctionnement de son site web.
                </p>
              </div>
            </section>

            {/* QU'EST-CE QU'UN COOKIE */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">QU'EST-CE QU'UN « COOKIE » ?</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Un « cookie » est un petit fichier comportant des informations écrites que votre navigateur mémorise lorsque vous visitez un site web. Il a pour but de recueillir certaines informations pour analyser l'activité du site et faciliter votre navigation.
                </p>
                <p>
                  Les cookies retiennent par exemple votre préférence linguistique pour que vous n'ayez pas à la sélectionner à nouveau lors de votre prochaine visite. En aucun cas, les cookies émis par <span className="text-brand-red">www.HTVIVA.fr</span> ne récoltent votre nom ou votre adresse e-mail.
                </p>
              </div>
            </section>

            {/* COMMENT HTVIVA UTILISE LES COOKIES */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">COMMENT HTVIVA UTILISE LES COOKIES ?</h2>
              <div className="text-gray-700">
                <p>HTVIVA utilise les cookies pour :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Compiler des données statistiques sur l'usage du site afin de l'améliorer</li>
                  <li>Partager nos pages web sur les réseaux sociaux</li>
                  <li>Faciliter la capacité des utilisateurs à naviguer sur le site web</li>
                </ul>
              </div>
            </section>

            {/* COMMENT DÉSACTIVER LES COOKIES */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">COMMENT DÉSACTIVER LES COOKIES ?</h2>
              <div className="text-gray-700">
                <p>
                  Si vous souhaitez désactiver tous les cookies ou seulement certains sur votre appareil, vous pouvez le faire grâce aux paramètres de votre navigateur. Cependant votre expérience utilisateur risque d'être dégradée.
                </p>
              </div>
            </section>

            {/* DÉCHARGE DE RESPONSABILITÉ */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">DÉCHARGE DE RESPONSABILITÉ</h2>
              <div className="text-gray-700">
                <p>
                  Cette politique de confidentialité s'applique uniquement aux renseignements recueillis par le site web <span className="text-brand-red">www.HTVIVA.fr</span>. Ce dernier peut contenir des liens vers d'autres sites externes. HTVIVA ne peut toutefois garantir que ces sites web appliquent une politique de respect de la vie privée conforme à la loi relative à la protection de la vie privée à l'égard des traitements de données à caractère personnel. C'est pourquoi, vous êtes invités à prendre connaissance des politiques de confidentialité des sites web que vous visitez avant de leur transmettre vos données à caractère personnel.
                </p>
              </div>
            </section>

            {/* MODIFICATION DE CETTE POLITIQUE */}
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-4">MODIFICATION DE CETTE POLITIQUE DE CONFIDENTIALITÉ</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  HTVIVA se réserve le droit d'apporter des modifications à cette politique de confidentialité, en mettant sur le site internet une nouvelle version à votre disposition. Cette nouvelle version entre de plein droit immédiatement en vigueur.
                </p>
                <p>
                  À chaque nouvelle utilisation du site internet de HTVIVA, vous vous soumettez à cette nouvelle politique de confidentialité telle qu'elle aura été éventuellement modifiée. HTVIVA vous encourage donc à consulter régulièrement cette page afin de vous tenir au courant de tout changement.
                </p>
              </div>
            </section>

            {/* QUESTIONS */}
            <section className="border-t pt-6">
              <h2 className="text-2xl font-semibold text-navy mb-4">QUESTIONS</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Pour tous commentaires ou questions concernant cette politique de confidentialité ou vos données à caractère personnel, contactez-nous à <a href="mailto:contact@htviva.fr" className="text-brand-red hover:underline">contact@htviva.fr</a>.
                </p>
                <p>Ou par courrier :</p>
                <p>HTVIVA – 21 rue Marcel Pagnol – 69 694 Vénissieux cedex – France</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesPage; 