import styled from "styled-components";

const ProgressHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #c6c6c6;
  position: absolute;
`;

const Progress = styled.div`
  height: 8px;
  background: purple;
  width: ${(props) => props.width};
  position: absolute;
`;

const ProgressBar = ({ result, data }) => {
  /** 상단 프로그레스바 */
  const barWidth = result;

  return (
    <ProgressHeader>
      <ProgressContainer />
      <Progress width={(barWidth / data.length) * 100 + "%"} />
    </ProgressHeader>
  );
};

export default ProgressBar;
