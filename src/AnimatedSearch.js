import React from "react";
import {
  AnimatedBlock,
  useAnimatedValue,
  interpolate,
  useMeasure,
} from "react-uicomp";
import { FaSearch } from "react-icons/all";

const AnimatedSearch = () => {
  const animation = useAnimatedValue(0);
  const { handler, height } = useMeasure();

  return (
    <AnimatedBlock
      style={{
        ...styles.container,
        transform: interpolate(animation.value, {
          inputRange: [0, 0.2, 1],
          outputRange: ["scale(1)", "scale(0.9)", "scale(1)"],
        }),
        marginTop: interpolate(animation.value, {
          inputRange: [0, 1],
          outputRange: [100, 50],
        }),
        padding: interpolate(animation.value, {
          inputRange: [0, 1],
          outputRange: [0, 10],
        }),
        height: interpolate(animation.value, {
          inputRange: [0, 1],
          outputRange: [height, 200],
        }),
      }}
    >
      <div {...handler} style={styles.searchContainer}>
        <span style={styles.searchIcon}>
          <FaSearch />
        </span>
        <input
          style={styles.searchBar}
          type="text"
          placeholder="Quick Access"
          onFocus={() => (animation.value = 1)}
        />
        <AnimatedBlock
          style={{
            ...styles.cancel,
            width: interpolate(animation.value, {
              inputRange: [0, 1],
              outputRange: [0, 100],
            }),
            opacity: animation.value,
          }}
          onClick={() => (animation.value = 0)}
        >
          Cancel
        </AnimatedBlock>
      </div>
    </AnimatedBlock>
  );
};

export default AnimatedSearch;

const styles = {
  container: {
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#FFF",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.14)",
    borderRadius: 10,
    border: "1px solid #E1E1E1",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    margin: "0px auto",
  },
  searchIcon: {
    position: "absolute",
    fontSize: 20,
    left: 10,
    top: "50%",
    transform: "translateY(-50%)",
    color: "#A1A1A1",
  },
  searchBar: {
    flex: 1,
    padding: 10,
    paddingLeft: 40,
    fontSize: 20,
    backgroundColor: "#ECEDF0",
    borderRadius: 10,
    outline: "none",
    border: "1px solid #E1E1E1",
    color: "#353535",
    display: "block",
  },
  cancel: {
    width: 100,
    fontFamily: "Arial",
    fontSize: 20,
    color: "#353535",
    textAlign: "center",
    cursor: "pointer",
    overflow: "hidden",
  },
};
