import { Autocomplete, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const ReservationSki = ({ posts, setPosts, fetchPosts }) => {
  const filterOptions = (options, params) => {
    const filtered = filter(options, params);
    if (params.inputValue !== "") {
      filtered.push({
        inputValue: params.inputValue,
        title: `Add "${params.inputValue}"`,
      });
    }
    return filtered;
  };
  const filter = (options, params) => {
    const filtered = filterByInputValue(options, params);
    return filtered;
  };
  const filterByInputValue = (options, params) => {
    const filtered = [];
    options.forEach((option) => {
      let keep = true;
      if (option.inputValue) {
        keep = false;
      }
      if (keep) {
        filtered.push(option);
      }
    });
    return filtered;
  };

  return (
    <div>
      <div className="filter">
        <Autocomplete
          id="combo-box-demo"
          options={posts}
          getOptionLabel={(option) => option.size}
          style={{ width: 300 }}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField {...params} label="Les tailles" variant="outlined" />
          )}
        />
        <Autocomplete
          id="combo-box-demo"
          options={posts}
          getOptionLabel={(option) => option.weight}
          style={{ width: 300 }}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField {...params} label="Les poids" variant="outlined" />
          )}
        />
        <Autocomplete
          id="combo-box-demo"
          options={posts}
          getOptionLabel={(option) => option.price}
          style={{ width: 300 }}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField {...params} label="Les prix" variant="outlined" />
          )}
        />
      </div>
        <div className="main"> 
        {posts.map((post) => (
         <div className="post" key={post.id}> 
            <div className="image">
              <img src={post.image} alt="ski" />
            </div>
            <div className="text">
              <h2>{post.title}</h2>
              <h3>{post.style}</h3>
              <h3>{post.weight} kilo</h3>
              <h3>{post.size}cm</h3>
              <h3>{post.price}€</h3>
              <h3>{post.description}</h3>
              <h3>{post.createdAt}</h3>
            </div>
            <Link to={`/detail/${post._id}`}> <input type="button" value="Réserver" /> </Link>
            
          </div>      
        ))}
      </div>
    </div>
  );
};

export default ReservationSki;
