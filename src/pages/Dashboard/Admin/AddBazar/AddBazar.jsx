import { useForm, useFieldArray } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AddBazar = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      items: [{ weight: "", item: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = async (data) => {
    const itemList = {
      name: user?.displayName,
      email: user?.email,
      title: data.title,
      description: data.des,
      totalMeal: data.total,
      time: data.tag,
      createdAt: new Date(),
      items: data.items,
    };

    console.log(itemList);
  };

  return (
    <div>
      <Helmet>
        <title>Mess Manage | Add Meal</title>
      </Helmet>
      <SectionTitle heading="add an item" subHeading="What's new?" />
      <div className="hero ">
        <div className="hero-content flex-col ">
          <div className="card shadow-xl md:w-[700px]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meal Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  {...register("title", { required: true })}
                  placeholder="Name"
                  className="input input-bordered border-red-400"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Meal Description</span>
                </label>
                <input
                  type="text"
                  name="des"
                  {...register("des", { required: true })}
                  placeholder="Description"
                  className="textarea textarea-bordered h-24 border-red-400"
                />
              </div>

              {fields.map((item, index) => (
                <div key={item.id} className="form-control">
                  <label className="label">
                    <span className="label-text">{`Item-${
                      index + 1
                    } (item name and weight)`}</span>
                  </label>

                  <div className="flex  gap-6">
                    <div>
                      <input
                        type="text"
                        name={`items[${index}].item`}
                        {...register(`items[${index}].item`, { required: true })}
                        placeholder="Item Name"
                        className="input input-bordered w-96 border-red-400"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name={`items[${index}].weight`}
                        {...register(`items[${index}].weight`, {
                          required: true,
                        })}
                        placeholder="Weight"
                        className="input input-bordered  border-red-400"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-2 btn bg-gray-200 hover:text-white hover:bg-black"
                    onClick={() => remove(index)}
                  >
                    Remove Item
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => append({ item: "", weight: "" })}
                className="btn bg-blue-500 text-white hover:text-white hover:bg-black"
              >
                Add This Item
              </button>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Meal</span>
                </label>
                <input
                  type="number"
                  name="total"
                  {...register("total", { required: true })}
                  placeholder="Total meal"
                  className="input input-bordered border-red-400"
                />
              </div>

              <div className="form-control mt-6  ">
                <label className="label">
                  <span className="label-text">Meal Time</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("tag", { required: true })}
                  required
                  className="select select-bordered border-red-400 w-full"
                >
                  <option disabled value="default">
                    Select a Tag
                  </option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-red-300 hover:text-white hover:bg-black"
                  type="submit"
                  value="Add Meal"
                />
              </div>
            </form>
            <div></div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default AddBazar;
