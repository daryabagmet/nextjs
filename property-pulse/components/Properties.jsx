'use client';
import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner';

const Properties = () => {
	const [properties, setProperties] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(3);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const res = await fetch(
					`/api/properties?page=${page}&pageSize=${pageSize}`
				);

				if (res.status === 200) {
					const propertiesData = await res.json();
					setProperties(propertiesData.properties);
					setTotalItems(propertiesData.total);
				}
			} catch (error) {
				console.log('Failed to fetch properties', error);
			} finally {
				setLoading(false);
			}
		};

		fetchProperties();
	}, [page, pageSize]);

	const handlePageChange = (newPage) => {
		setPage(newPage);
		setLoading(true);
	};

	return loading ? (
		<Spinner loading={loading} />
	) : (
		<section className='px-4 py-6'>
			<div className='container-xl lg:container m-auto px-4 py-6'>
				{properties.length === 0 ? (
					<p>No properties found</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{properties.map((property) => (
							<PropertyCard key={property._id} property={property} />
						))}
					</div>
				)}
				<Pagination
					page={page}
					pageSize={pageSize}
					totalItems={totalItems}
					onPageChange={handlePageChange}
				/>
			</div>
		</section>
	);
};

export default Properties;
