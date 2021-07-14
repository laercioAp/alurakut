import { useRouter } from 'next/router';
import { AlurakutMenu } from '../../src/libs/AlurakutCommons';
import MainGrid from '../../src/components/MainGrid';
import Box from '../../src/components/Box';

const Comunidade = ({ idComunidade }) => {
  const router = useRouter();

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            {router.isFallback ? (
              <h1 className="title">Carregando...</h1>
            ) : (
              <h1 className="title">
                Em breve mais detalhes sobre a comunidade '{idComunidade}'
              </h1>
            )}
          </Box>
        </div>
      </MainGrid>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { idComunidade } = params;

  return {
    props: {
      idComunidade,
    },
  };
};

export default Comunidade;
