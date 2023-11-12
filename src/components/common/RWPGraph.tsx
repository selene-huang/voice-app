import React, { StyleSheet, View } from 'react-native';
import Colors from '../../../assets/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import DMSans from '../../../assets/DM_Sans/static/DMSans-Regular.ttf';
import {
  CartesianChart,
  Line,
  Scatter,
  useChartPressState,
} from 'victory-native';
import { Circle, useFont } from '@shopify/react-native-skia';
import { SharedValue } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { BodyText } from '../../../assets/Fonts';
import { Column, LeftAlignContainer, Row } from './Containers';

const DUMMY_DATA_1 = [{ resonance: 60, weight: 10, pitch: 569 }];
const DUMMY_DATA_2 = [{ resonance: 20, weight: 85, pitch: 204 }];

export function RWPGraph() {
  // const font = useFont(DMSans, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { weight: 0 } });
  function ToolTip({
    x,
    y,
  }: {
    x: SharedValue<number>;
    y: SharedValue<number>;
  }) {
    return <Circle cx={x} cy={y} r={7} color={Colors.lightPurple} />;
  }

  return (
    <View>
      <Row>
        <Column>
          <BodyText>100</BodyText>
        </Column>
        <LinearGradient
          colors={[Colors.green, Colors.yellow]}
          start={{
            x: 0,
            y: 1,
          }}
          end={{
            x: 1,
            y: 0,
          }}
          style={{ width: 275, height: 275, margin: 5 }}
        >
          <CartesianChart
            data={DUMMY_DATA_1}
            xKey="resonance"
            yKeys={['weight']}
            chartPressState={state}
            domain={{ x: [0, 100], y: [0, 100] }}
          >
            {({ points }) => (
              <>
                <Scatter
                  points={points.weight}
                  color={Colors.darkGray}
                  radius={7}
                />
                {isActive && (
                  <ToolTip x={state.x.position} y={state.y.weight.position} />
                )}
              </>
            )}
          </CartesianChart>
        </LinearGradient>
      </Row>
      <Row>
        <BodyText>0</BodyText>
        <LeftAlignContainer>
          <BodyText>100</BodyText>
        </LeftAlignContainer>
      </Row>
    </View>
  );
}
