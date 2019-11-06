/** @jsx jsx */
import { jsx } from 'theme-ui';
import imgForBanner from './2green-chameleon-unsplash-newImage-100.jpg';
import imgIvanGanev from './IvanGanev4.jpg';

export default ({
  name = 'Ivan Ganev',
  langLink = 'https://ru.ganev.ru/',
  lang = 'на русском'
}) => {
  return (
    <div
      sx={{
        color: 'white',
        backgroundImage: `url(${imgForBanner})`,
        backgroundPosition: '50% 90%',
        padding: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundColor: '#161616',
        borderRadius: '12px',
        boxShadow: '0 2px 8px #15151594',
        marginBottom: '40px',
        textShadow: '0 0px 8px #161616'
      }}
    >
      <div sx={{ display: 'flex', alignItems: 'center' }}>
        <div
          sx={{
            boxShadow: 'inset 0 0 5px #151515',
            height: '151px',
            width: '151px',
            minHeight: '151px',
            minWidth: '151px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            borderRadius: '100%',
            backgroundImage: `url(${imgIvanGanev})`,
            marginRight: '20px'
          }}
        ></div>
        <div>
          <h1 sx={{ fontSize: '40px', my: '0px' }}>{name}</h1>
          <p sx={{ marginTop: '0px', fontSize: '20px' }}>
            {/* <span sx={{ fontSize: '13px' }}>🌐 </span>
            <a sx={{ color: 'white' }} href={langLink}>
              {lang}
            </a> */}
            web developer
          </p>
        </div>
      </div>
    </div>
  );
};
