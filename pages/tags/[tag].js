import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const TagPage = () => {
  const { t } = useTranslation('tags');

  return <>{t('tags')}</>;
};

export default TagPage;

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['tags'])),
    },
  };
};
