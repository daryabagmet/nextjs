import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

export const dynamic = 'force-dynamic';

//GET api/messages/unread
export const GET = async (request) => {
	try {
		await connectDB();
		const sessionUser = await getSessionUser();

		if (!sessionUser || !sessionUser.userId) {
			return new Response('User ID is required', { status: 401 });
		}

		const { userId } = sessionUser;

		const unreadCount = await Message.countDocuments({
			recipient: userId,
			read: false,
		});

		return new Response(JSON.stringify(unreadCount), { status: 200 });
	} catch (error) {
		console.log('error', error);
		return new Response('Failed get unread messages count', { status: 500 });
	}
};
