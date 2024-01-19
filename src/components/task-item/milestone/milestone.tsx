import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./milestone.module.css";

export const Milestone: React.FC<TaskItemProps> = ({
  task,
  isDateChangeable,
  onEventStart,
  isSelected,
}) => {
  const transform = `rotate(45 ${task.x1 + task.height * 0.356} 
    ${task.y + task.height * 0.85})`;
  const getBarColor = () => {
    return isSelected
      ? task.styles.backgroundSelectedColor
      : task.styles.backgroundColor;
  };

  const translateStyle = {
    transform: `translateY(-${task.index*50}px)`,
  };

  const translateStyleX = {
    transform: `translateX(-10px) `,
  };

  return (
    <g style={translateStyleX}>
      <g tabIndex={0} style={translateStyle} className={styles.milestoneWrapper}>
        <rect
          fill={getBarColor()}
          x={task.x1}
          width={task.height}
          y={task.y}
          height={task.height}
          rx={task.barCornerRadius}
          ry={task.barCornerRadius}
          transform={transform}
          className={styles.milestoneBackground}
          onMouseDown={e => {
            isDateChangeable && onEventStart("move", task, e);
          }}
        />
      </g>
      <g tabIndex={0} className={styles.milestoneWrapper}>
        <rect
          fill={getBarColor()}
          x={task.x1}
          width={task.height}
          y={task.y}
          height={task.height}
          rx={task.barCornerRadius}
          ry={task.barCornerRadius}
          transform={transform}
          className={styles.milestoneBackground}
          onMouseDown={e => {
            isDateChangeable && onEventStart("move", task, e);
          }}
        />
      </g>
    </g>

  );
};
