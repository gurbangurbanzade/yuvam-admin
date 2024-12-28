import EditIcon from "../../icons/pen-icon";
import ShareIcon from "../../icons/share-icon";

const data = [
  {
    id: "0001",
    name: "Adil Agalarov",
    phone: "+994 51 444 33 22",
    fin: "FFCA887",
    property: "1234567890",
    package: "Standard",
    coverage: "50,000₼",
    billing: "Yearly",
  },
  {
    id: "0001",
    name: "Adil Agalarov",
    phone: "+994 51 444 33 22",
    fin: "FFCA887",
    property: "1234567890",
    package: "Standard",
    coverage: "50,000₼",
    billing: "Yearly",
  },
  {
    id: "0001",
    name: "Adil Agalarov",
    phone: "+994 51 444 33 22",
    fin: "FFCA887",
    property: "1234567890",
    package: "Standard",
    coverage: "50,000₼",
    billing: "Yearly",
  },
];

const Table = () => {
  const tableHeaders = [
    "ID",
    "Name",
    "Mobile Number",
    "FIN Code",
    "Property #",
    "Package",
    "Coverage",
    "Billing",
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-3">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className="whitespace-nowrap font-500 leading-20 text-secondaryLight text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="h-[48px] bg-pinkLight rounded-8">
              <td className="font-500 leading-20 whitespace-nowrap">
                {row.id}
              </td>
              <td className="font-500 leading-20 whitespace-nowrap">
                {row.name}
              </td>
              <td className="font-500 leading-20 whitespace-nowrap">
                {row.phone}
              </td>
              <td className="font-500 leading-20 whitespace-nowrap">
                {row.fin}
              </td>
              <td className="font-500 leading-20 whitespace-nowrap">
                {row.property}
              </td>
              <td className="font-500 leading-20 whitespace-nowrap">
                {row.package}
              </td>
              <td className="font-500 leading-20 whitespace-nowrap">
                {row.coverage}
              </td>
              <td className="font-500 leading-20 whitespace-nowrap">
                {row.billing}
              </td>
              <td className="font-500 leading-20 whitespace-nowrap">
                <button>
                  <EditIcon />
                </button>
              </td>
              <td className="p-2 whitespace-nowrap">
                <button>
                  <ShareIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
