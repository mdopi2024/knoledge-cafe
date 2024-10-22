import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 px-3 border-b border-2'>
            <h1 className='text-2xl font-bold'>react knoledge cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;