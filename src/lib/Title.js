import styled from 'styled-components';

const StyledTitle = styled.h1`
	color: #01267b;
`;

export function Title(props) {
	return (
		<StyledTitle>{props.title}</StyledTitle>
	);
}
