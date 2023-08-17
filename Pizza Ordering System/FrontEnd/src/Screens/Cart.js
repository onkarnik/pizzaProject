import Footer from "./Footer";
import Navbar from "./Navbar";

function Cart() {
  return (
    <>
      <div className="container">
        <div className="card" style={{ margin: 100 }}>
          <h3>Cart</h3>
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                  <th>Total price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>macoronni</td>
                  <td>400</td>
                  <td>2</td>
                  <td>
                    <button type="button" class="btn btn-danger btn-sm">
                      Remove
                    </button>
                  </td>
                  <td>800</td>
                </tr>
                <tr>
                  <td>macoronni</td>
                  <td>400</td>
                  <td>2</td>
                  <td>
                    <button type="button" class="btn btn-danger btn-sm">
                      Remove
                    </button>
                  </td>
                  <td>800</td>
                </tr>

                <tr>
                  <td style={{ color: "red", fontWeight: "bold" }} colSpan={4}>
                    Total price
                  </td>
                  <td style={{ color: "red", fontWeight: "bold" }}>1600</td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <center>
                      <a
                        href="/checkout"
                        style={{
                          backgroundColor: "yellow",
                        }}
                        className="btn btn-warning"
                      >
                        Check Out
                      </a>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
