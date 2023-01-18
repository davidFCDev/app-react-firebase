
const Product = ({ image, title, price }) => {
    return (
        <div className='flex flex-col gap-4 justify-evenly border rounded-2xl p-10 hover:shadow-md hover:shadow-slate-300'>
            <img alt="" src={image} className='max-w-screen-sm' />
            <div className='text-right flex flex-col gap-4'>
                <h2 className='text-sm'>{title}</h2>
                <p className='font-semibold'>{price} €</p>
            </div>
        </div>
    );
};

export default Product;