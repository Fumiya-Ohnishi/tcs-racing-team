import { Box, Divider, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { TeamMemberTitle } from '../components/TeamMemberTitle';

export const TeamMemberCoreValue: FC = () => {
  return (
    <Box mb="192px" color="white">
      <Divider orientation="horizontal" mx="auto" w="76%" />
      <Box
        background={`linear-gradient(rgba(26, 26, 26, 1), rgba(0, 0, 0, 0.3)), url(/images/img-lattice-background.webp)`}
        backgroundSize="80%"
        pt="74px"
        pb={{ base: '92px', lg: '118px' }}
      >
        <TeamMemberTitle
          title='"存在意義・使命"'
          middleTitle="Mission"
          subTitle="Mission"
        />
        <VStack
          spacing="48px"
          m="0 auto"
          mt="128px"
          w={{ base: '76%', lg: '418px' }}
        >
          <Text textAlign="center" fontSize="18px">
            マウンテンバイクを通うじて、日本からアジアへ、
            そしてアジアから世界への架け橋となります
          </Text>
        </VStack>
      </Box>
      <Divider orientation="horizontal" mx="auto" w="76%" />
      <Box
        background={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 1), rgba(0, 0, 0, 0.3)), url(/images/img-lattice-background.webp)`}
        backgroundSize="80%"
        pt="74px"
        pb={{ base: '92px', lg: '118px' }}
      >
        <TeamMemberTitle
          title='"将来像・方向性"'
          middleTitle="Vision"
          subTitle="Vision"
        />
        <VStack
          spacing="48px"
          m="0 auto"
          mt="128px"
          w={{ base: '76%', lg: '648px' }}
        >
          <Text textAlign="center" fontSize="18px">
            アジア中核の存在として、国際平和な協力と協調を促進します。国際的な協力が、
            異なる国々との関係を築くための基板となる役割を果たします。
          </Text>
          <Text textAlign="center" fontSize="18px">
            UCIワールドカップなどの国際大会で常連としての地位を築き上げ2028年ロス
            オリンピック出場を目指します。
          </Text>
          <Text textAlign="center" fontSize="18px">
            アジア大陸NO.1のチームとして、アジアの市場でのMTBの普及に貢献し、新たな
            価値を提供します。
          </Text>
        </VStack>
      </Box>
      <Divider orientation="horizontal" mx="auto" w="76%" />
      <Box
        background={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 1)), url(/images/img-lattice-background.webp)`}
        backgroundSize="80%"
        pt="74px"
        pb={{ base: '92px', lg: '118px' }}
      >
        <TeamMemberTitle
          title='"価値観・行動指針"'
          middleTitle="Value"
          subTitle="Value"
        />
        <VStack
          spacing="48px"
          m="0 auto"
          mt="128px"
          w={{ base: '76%', lg: '648px' }}
        >
          <Box>
            <Text textAlign="center" fontSize="18px">
              Business
            </Text>
            <Text textAlign="center" fontSize="18px">
              プロフェッショナルな姿勢でスポーツとビジネス両面での成功を追求します。
            </Text>
          </Box>
          <Box>
            <Text textAlign="center" fontSize="18px">
              Challenge
            </Text>
            <Text textAlign="center" fontSize="18px">
              常識にとらわれず、新しい挑戦に果敢に取り組みます。
            </Text>
          </Box>
          <Box>
            <Text textAlign="center" fontSize="18px">
              Feeling
            </Text>
            <Text textAlign="center" fontSize="18px">
              ファン・スポンサー・自転車関係者、全ての人に熱くかかわり大切にします。
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
