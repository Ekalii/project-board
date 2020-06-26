import React from 'react';
import store from '../../common/store';
import { addFriend } from '../state';
import { getFriend } from '../../common/mockData';
import FriendList from '../component/FriendList';

class FriendMain extends React.Component {
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	};
	componentWillUnmount() {
		this.unsubscribe();
	};

	onAdd = () => {
		const friend = getFriend();
		store.dispatch(addFriend(friend));
	};

	render() {
		const friends = store.getState().friend.friends;
		return(
			<div>
				<button onClick={this.onAdd}>친구 추가</button>
				<FriendList friends={friends} />
			</div>
		);
	};
}

export default FriendMain;