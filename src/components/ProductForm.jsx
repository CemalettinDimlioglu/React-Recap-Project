
const ProductForm = ({ formData,handleChange,handleSubmit, text }) => {
  
  return (
    <article id="add-product" className="mb-4 mt-4">
      <h1 className="text-center">Product</h1>
      <form class="p-2">
        <div class="mb-3">
          <label for="add-name" class="form-label">
            Product Name
          </label>
          <input
            type="text"
            class="form-control"
            id="add-name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="add-price" class="form-label">
            Product Price
          </label>
          <input
            type="number"
            class="form-control"
            id="add-price"
            required
          />
        </div>
        <div class="mb-3">
          <label for="add-quantity" class="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            class="form-control"
            id="add-quantity"
            required
          />
        </div>
        <label for="add-image" class="form-label">
          Product Image
        </label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            class="form-control"
            id="add-image"
            aria-describedby="basic-addon3"
            required
          />
        </div>
        <div class="text-center">
          <button type="submit" class="add-to-cart btn btn-success btn-sm">
            <i class="fa-solid fa-cart-plus me-2"></i>Save To Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
