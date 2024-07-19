import styled from 'styled-components';
import { useTitle } from '../../hooks/useTitle';
import { Title } from '../lib/Title';

const StyledHome = styled.div`
	text-align: center;
`;

export function Home() {
	const { title, setTitle } = useTitle();

	function onInputChange(event) {
		setTitle(event.target.value)
	}

	return (
		<StyledHome>
			<Title title={title} />
			<input type="text" 
				onChange={onInputChange}
				placeholder="Put a title here"
				value={title} />
		</StyledHome>
	);
}
