const PropertyHeaderImage = ({ image }) => {
	return (
		<section>
			<div className='container-xl m-auto'>
				<div className='grid grid-cols-1'>
					<img
						src={image}
						alt='property image'
						className='object-cover h-[400px] w-full'
						width={0}
						heihgt={0}
						sizes='100vw'
					/>
				</div>
			</div>
		</section>
	);
};

export default PropertyHeaderImage;
