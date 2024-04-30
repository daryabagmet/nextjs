import Image from 'next/image';
import PropertyCardMainDetails from '@/components/PropertyCardMainDetails';

const FeaturedPropertyCard = ({ property }) => {
	return (
		<div className='bg-white rounded-xl shadow-md relative flex flex-col md:flex-row'>
			<Image
				src={property.images[0]}
				alt=''
				width={500}
				height={500}
				className='object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5'
			/>
			<div className='p-6 w-full'>
				<div className='text-left md:text-center lg:text-left mb-6'>
					<h3 className='text-xl font-bold'>{property.name}</h3>
					<div className='text-gray-600'>{property.type}</div>
				</div>
				<PropertyCardMainDetails
					property={property}
					borderClass='border border-gray-200 mb-5'
					featured={true}
				/>
			</div>
		</div>
	);
};

export default FeaturedPropertyCard;
