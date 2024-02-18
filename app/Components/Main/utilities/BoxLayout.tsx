/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import {
  ListContainer,
  List,
  ListBox,
  HeaderWorkoutText,
  HeaderWorkoutSets,
} from "../styles";

interface MuscleData {
  data: [
    {
      name: string;
      sets: number;
      reps: number;
    },
  ];
}

const BoxLayout: React.FC<MuscleData> = ({ data }) => {
  return (
    <ListContainer>
      <List>
        {data.map((item) => (
          <ListBox key={item.name}>
            <HeaderWorkoutText>{item?.name}</HeaderWorkoutText>
            <HeaderWorkoutSets>Sets: {item?.sets}</HeaderWorkoutSets>
            <HeaderWorkoutSets>Reps: {item?.reps}</HeaderWorkoutSets>
          </ListBox>
        ))}
      </List>
    </ListContainer>
  );
};

export default BoxLayout;
