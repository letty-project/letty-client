import SearchIcon from 'src/assets/search-icon.svg';

const SearchBar = () => {
  return (
    <div className="form-control">
      <div className="input-group input-group-sm  rounded-none">
        <button className="btn bg-[#ebebeb] w-[40px] btn-sm p-0">
          <img src={SearchIcon} width="20px" height="20px" />
        </button>
        <input
          type="text"
          placeholder="검색하기"
          className="input bg-[#ebebeb] input-sm w-80 p-0 text-[#c1c1c1]  font-semibold"
        />
      </div>
    </div>
  );
};
export default SearchBar;
