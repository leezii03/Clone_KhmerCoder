import React from "react";

const supporters = [
  { name: "Visal In", total: 100, current: 100 },
  { name: "Sopha Sum", total: 100, current: 100 },
  { name: "Sokhna Vor", total: 100, current: 100 },
  { name: "Kama Sos", total: 50, current: 50 },
  { name: "Annoymous", total: 222 },
  { name: "Van Sopheamen", total: 80 },
  { name: "Sokna Ly", total: 50 },
  { name: "Victorya Heng", total: 50 },
  { name: "Punleu Chomnan", total: 50 },
  { name: "Tola Imchan", total: 50 },
  { name: "Socheat Leang", total: 20 },
  { name: "Leang Panharith", total: 20 },
  { name: "Sek Sopheak", total: 10 },
  { name: "Reaksmey Rt", total: 10 },
  { name: "Sarun Rathpanha", total: 5 },
  { name: "Ek Vireak", total: 5 },
];

const getTotal = (field) => {
  return supporters.reduce(
    (sum, s) => sum + (s[field] !== undefined ? s[field] : 0),
    0
  );
};

const SupportersTable = () => {
  return (
    <div className="mx-auto mt-10 bg-[#0F172A] text-white rounded-md shadow-md overflow-hidden">
      <table className="min-w-full text-lg">
        <thead className="bg-[#1E293B] text-left">
          <tr>
            <th className="p-4 font-semibold">Supporter</th>
            <th className="p-4 font-semibold text-right">Total</th>
            <th className="p-4 font-semibold text-right">Current</th>
          </tr>
        </thead>

        <tbody className="text-[16px]">
          {supporters.map((s, index) => (
            <tr
              key={index}
              className="border-b border-[#334155]"
            >
              <td className="px-4 py-4 flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400" />
                {s.name}
              </td>
              <td className="px-4 py-2 text-right">${s.total}</td>
              <td className="px-4 py-2 text-right">
                {s.current !== undefined ? `$${s.current}` : "--"}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot className="bg-[#1E293B] font-semibold">
          <tr>
            <td className="px-4 py-3 text-right">Total</td>
            <td className="px-4 py-3 text-right">${getTotal("total")}</td>
            <td className="px-4 py-3 text-right">${getTotal("current")}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SupportersTable;
