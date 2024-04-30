import Image from 'next/image';
import PropertyCardMainDetails from '@/components/PropertyCardMainDetails';

const PropertyCard = ({ property }) => {
	return (
		<div className='bg-white rounded-xl shadow-md relative'>
			<Image
				src={property.images[0]}
				alt=''
				width={500}
				height={500}
				className='object-cover rounded-t-xl'
			/>
			<div className='p-4'>
				<div className='text-left md:text-center lg:text-left mb-6'>
					<div className='text-gray-600'>{property.type}</div>
					<h3 className='text-xl font-bold'>{property.name}</h3>
				</div>
				<PropertyCardMainDetails
					property={property}
					borderClass='border border-gray-100 mb-5'
					featured={false}
				/>
			</div>
		</div>
	);
};

export default PropertyCard;
