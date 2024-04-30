'use client';
import { useEffect } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';

const UnreadMessages = ({ session }) => {
	const { unreadCount, setUnreadCount } = useGlobalContext();

	useEffect(() => {
		if (!session) return;

		const fetchUnreadCount = async () => {
			try {
				const res = await fetch('/api/messages/unread');
				if (res.status === 200) {
					const data = await res.json();
					setUnreadCount(data);
				}
			} catch (error) {
				console.log('Error fetch messages', error);
			}
		};

		fetchUnreadCount();
	}, [session]);

	return (
		unreadCount > 0 && (
			<span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
				{unreadCount}
			</span>
		)
	);
};

export default UnreadMessages;
