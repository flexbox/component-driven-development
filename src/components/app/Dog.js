import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../core/Modal';
import DogPhoto from './DogPhoto';
import DogInfo from './DogInfo';

const Button = styled.button`
	padding: 0;
	border: 0;
	background: transparent;
	cursor: pointer;

	&:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${props => props.theme.color.focus};
	}

	&::-moz-focus-inner {
		border: 0;
	}
`;

class Dog extends Component {
	state = {
		isModalOpen: false,
	};

	handleOpenModal = () => {
		this.setState({ isModalOpen: true });
	};

	handleCloseModal = () => {
		this.setState({ isModalOpen: false });
	};

	render() {
		return (
			<React.Fragment>
				<Modal
					title={this.props.breed}
					isOpen={this.state.isModalOpen}
					onRequestClose={this.handleCloseModal}
				>
					<DogInfo {...this.props} />
				</Modal>
				<Button onClick={this.handleOpenModal}>
					<DogPhoto {...this.props} />
				</Button>
			</React.Fragment>
		);
	}
}

Dog.propTypes = {
	id: PropTypes.string,
	breed: PropTypes.string,
	kidFriendly: PropTypes.number,
	dogFriendly: PropTypes.number,
	lowShedding: PropTypes.number,
	easyToGroom: PropTypes.number,
	highEnergy: PropTypes.number,
	goodHealth: PropTypes.number,
	lowBarking: PropTypes.number,
	intelligence: PropTypes.number,
	easyToTrain: PropTypes.number,
	toleratesHot: PropTypes.number,
	toleratesCold: PropTypes.number,
};

export default Dog;