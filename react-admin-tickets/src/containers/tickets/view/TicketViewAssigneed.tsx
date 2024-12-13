import { useReference, useTranslate } from "react-admin";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

const TicketViewAssigneed = (props: any) => {
  const t = useTranslate();
  const { referenceRecord: assigne, isLoading } = useReference<any>({
    reference: "assignes",
    id: props.assignedId,
  });

  useEffect(() => {
    console.log(props.assignedId);
    console.log(assigne);
  }, [assigne]);

  return (
    <div className="grid grid-cols-12 gap-4 w-full p-[16px]">
      <div className="col-span-12 mb-4">
        <h2 className="flex gap-2 items-center justify-between text-lg w-full">
          <span>{t("ticket.view.assigne")}</span>
          <CloseIcon
            fontSize="small"
            className="cursor-pointer"
            onClick={() => props.closeViewEdit()}
          />
        </h2>
      </div>

      {assigne && (
        <div className="col-span-12">
          <table className="mb-4">
            <tbody>
              <tr>
                <td className="w-28 font-semibold text-sm capitalize pb-4 align-top">
                  {t("common.fullName")}
                </td>
                <td className="text-sm">{assigne.name}</td>
              </tr>

              <tr>
                <td className="w-28 font-semibold text-sm capitalize pb-4 align-top">
                  {t("common.email")}
                </td>
                <td className="text-sm">{assigne.email}</td>
              </tr>

              <tr>
                <td className="w-28 font-semibold text-sm capitalize pb-4 align-top">
                  {t("common.phone")}
                </td>
                <td className="text-sm">{assigne.phone}</td>
              </tr>
              <tr>
                <td className="w-28 font-semibold text-sm capitalize pb-4 align-top">
                  {t("common.department")}
                </td>
                <td className="text-sm">{assigne.department}</td>
              </tr>
              <tr>
                <td className="w-28 font-semibold text-sm capitalize pb-4 align-top">
                  {t("common.address")}
                </td>
                <td className="text-sm">{assigne.address}</td>
              </tr>
            </tbody>
          </table>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2240.2294890220383!2d106.66457543873825!3d10.801663297337155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290b15a5c0a3%3A0xd9962fc2136be4f1!2zQ8OUTkcgVFkgQ-G7lCBQSOG6pk4gROG7ikNIIFbhu6QgJiBHSeG6okkgUEjDgVAgQ8OUTkcgTkdI4buGIEdPVFJVU1Q!5e1!3m2!1svi!2s!4v1733677007842!5m2!1svi!2s"
            width="100%"
            style={{ border: 0, minHeight: "230px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

export default TicketViewAssigneed;
