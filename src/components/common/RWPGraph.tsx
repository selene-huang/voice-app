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
import { BodyEmphasis, BodyText, YellowText } from '../../../assets/Fonts';
import {
  CenteredRow,
  Column,
  ColumnEnd,
  LeftAlignContainer,
  Row,
} from './Containers';
import { useState } from 'react';

const DUMMY_DATA_1 = [{ resonance: 60, weight: 10, pitch: 569 }];
const DUMMY_DATA_2 = [{ resonance: 20, weight: 85, pitch: 204 }];

export function RWPGraph() {
  // const font = useFont(DMSans, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { weight: 0 } });
  const [showToolTip, setShowToolTip] = useState(false);

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
      <CenteredRow style={{ marginLeft: -10 }}>
        <YellowText>
          <BodyEmphasis>Resonance</BodyEmphasis>
        </YellowText>
      </CenteredRow>
      <Row>
        <Column>
          <BodyText>100</BodyText>
          <ColumnEnd>
            <BodyText>0</BodyText>
          </ColumnEnd>
        </Column>
        <Column style={{ alignItems: 'flex-start' }}>
          {isActive ? (
            <View
              style={{
                backgroundColor: Colors.darkGray,
                zIndex: 1,
                position: 'absolute',
                marginTop: 225 - 3 * DUMMY_DATA_1[0].weight,
                marginLeft: 15 + 2 * DUMMY_DATA_1[0].resonance,
              }}
            >
              <BodyText>{`(${DUMMY_DATA_1[0].resonance}, ${DUMMY_DATA_1[0].weight})`}</BodyText>
            </View>
          ) : null}
          <LinearGradient
            colors={[Colors.green, Colors.yellow]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ width: 250, height: 250, margin: 5 }}
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
          <Row>
            <LeftAlignContainer>
              <BodyText>100</BodyText>
            </LeftAlignContainer>
          </Row>
        </Column>
        <Column style={{ justifyContent: 'center' }}>
          <YellowText
            style={{
              transform: [{ rotate: '90deg' }],
              marginHorizontal: -16,
              marginTop: -10,
            }}
          >
            <BodyEmphasis>Weight</BodyEmphasis>
          </YellowText>
        </Column>
      </Row>
    </View>
  );
}
