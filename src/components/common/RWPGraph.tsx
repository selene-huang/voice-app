import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Colors from '../../../assets/Colors';
import { CartesianChart, Scatter, useChartPressState } from 'victory-native';
import { Circle } from '@shopify/react-native-skia';
import { SharedValue } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { BodyEmphasis, BodyText, YellowText } from '../../../assets/Fonts';
import { MaterialIcons } from '@expo/vector-icons';
import {
  CenteredRow,
  Column,
  ColumnEnd,
  RightAlignContainer,
  Row,
} from './Containers';

type RWPPoint = {
  resonance: number;
  weight: number;
  pitch: number;
};

type RWPGraphProps = {
  type: 'weight' | 'pitch';
  points: RWPPoint[];
  openXAxisModal: () => void;
  openYAxisModal: () => void;
};

export function RWPGraph({
  type,
  points,
  openXAxisModal,
  openYAxisModal,
}: RWPGraphProps) {
  const { state, isActive } = useChartPressState({
    x: 0,
    y: { pitch: 0, weight: 0 },
  });

  let maxValue, chartColor, yAxisLabel, units;
  if (type == 'weight') {
    yAxisLabel = 'Weight';
    maxValue = 100;
    units = '%';
    chartColor = Colors.green;
  } else {
    yAxisLabel = 'Pitch';
    maxValue = 600;
    units = 'Hz';
    chartColor = Colors.purple;
  }

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
      <TouchableOpacity onPress={openXAxisModal}>
        <CenteredRow>
          <YellowText>
            <BodyEmphasis>{`Resonance `}</BodyEmphasis>
          </YellowText>
          <MaterialIcons name="help" size={16} color={Colors.yellow} />
        </CenteredRow>
      </TouchableOpacity>
      <Row>
        <Column>
          <BodyText>
            {maxValue}
            {units}
          </BodyText>
          <ColumnEnd>
            <BodyText>0</BodyText>
          </ColumnEnd>
        </Column>

        <Column style={styles.alignFlexStart}>
          {isActive ? (
            <View
              style={{
                backgroundColor: Colors.darkGray,
                zIndex: 1,
                position: 'absolute',
                marginTop:
                  type == 'weight'
                    ? state.y.weight.position.value - 30
                    : state.y.pitch.position.value - 30,
                marginLeft: state.x.position.value - 25,
              }}
            >
              <BodyText>{`(${Math.round(state.x.position.value)}, ${Math.round(
                type == 'weight'
                  ? state.y.weight.position.value
                  : state.y.pitch.position.value
              )})`}</BodyText>
            </View>
          ) : null}
          <LinearGradient
            colors={[chartColor, Colors.yellow]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.chartSize}
          >
            <CartesianChart
              data={points}
              xKey="resonance"
              yKeys={[type]}
              chartPressState={state}
              domain={{ x: [0, 100], y: [0, maxValue] }}
            >
              {({ points }) => (
                <>
                  <Scatter
                    points={type == 'weight' ? points.weight : points.pitch}
                    color={Colors.darkGray}
                    radius={7}
                  />
                  {isActive && (
                    <ToolTip
                      x={state.x.position}
                      y={
                        type == 'weight'
                          ? state.y.weight.position
                          : state.y.pitch.position
                      }
                    />
                  )}
                </>
              )}
            </CartesianChart>
          </LinearGradient>
          <Row>
            <RightAlignContainer>
              <BodyText>100%</BodyText>
            </RightAlignContainer>
          </Row>
        </Column>

        <Column style={styles.center}>
          <TouchableOpacity onPress={openYAxisModal}>
            <YellowText
              style={{
                ...styles.rotateCW,
                marginHorizontal: type == 'weight' ? -25 : -19,
              }}
            >
              <BodyEmphasis>{`${yAxisLabel} `}</BodyEmphasis>
              <MaterialIcons name="help" size={16} color={Colors.yellow} />
            </YellowText>
          </TouchableOpacity>
        </Column>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  alignFlexStart: { alignItems: 'flex-start' },
  chartSize: { width: 250, height: 250, margin: 5 },
  center: { justifyContent: 'center' },
  rotateCW: {
    transform: [{ rotate: '90deg' }],
    marginTop: -10,
  },
});
