import { Box, Text } from '@chakra-ui/react';
import { DirectorContent } from './DirectorContent';
import { Member } from './Member';

export const TheTeam = () => {
  const leftContent = (
    <>
      <Text color="#fff">2022 シンガポールナショナルチャンピオンシップ</Text>
      <Text color="#fff">XCO・XCC・DH 優勝</Text>
      <Text color="#fff">WカップXCE 4位</Text>
      <Text color="#fff">2023 シンガポールナショナルチャンピオンシップ</Text>
      <Text color="#fff">XCO・XCC・DH 優勝</Text>
    </>
  );
  const rightContent = (
    <>
      <Text color="#fff">2022 アジア選手権 XCO 2位</Text>
      <Text color="#fff">インドネシア選手権 XCO 1位</Text>
      <Text color="#fff">2023 シーゲーム XCO 1位</Text>
      <Text color="#fff">インドネシア選手権 XCO 1位</Text>
    </>
  );
  const leftContentDown = (
    <>
      <Text color="#fff">2022 全日本選手権 XCE 優勝</Text>
      <Text color="#fff">Wカップ XCE 優勝</Text>
    </>
  );
  const rightContentDown = (
    <>
      <Text color="#fff">2023 フィリピン選手権 XCE 3位</Text>
      <Text color="#fff">シーゲーム出場</Text>
    </>
  );
  return (
    <>
      <DirectorContent
        post={'株式会社 A-Union TCS 代表取締兼監督'}
        name={'山本 幸平'}
        comment={
          'テキストテキストテキストテキストテキストテキストテキストテキスト'
        }
      />
      <Member
        leftName={'リアッド ハキム'}
        leftComment={leftContent}
        leftImage={'/images/img-theTeam-02.webp'}
        leftBg={'/images/img-theTeam-bg-01.webp'}
        leftLink="#"
        rightName={'サユ ベラ'}
        rightComment={rightContent}
        rightImage={'/images/img-theTeam-03.webp'}
        rightBg={'/images/img-theTeam-bg-02.webp'}
        rightLink="#"
      />
      <Member
        leftName={'松本 佑太'}
        leftComment={leftContentDown}
        leftImage={'/images/img-theTeam-04.webp'}
        leftBg={'/images/img-theTeam-bg-03.webp'}
        leftWidth={'55%'}
        leftLink="#"
        rightName={'エセビア ニコル'}
        rightComment={rightContentDown}
        rightImage={'/images/img-theTeam-05.webp'}
        rightBg={'/images/img-theTeam-bg-04.webp'}
        rightLink="#"
      />
    </>
  );
};
