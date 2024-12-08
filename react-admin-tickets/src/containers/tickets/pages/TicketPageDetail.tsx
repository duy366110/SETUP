import { Show, SimpleShowLayout, useShowContext } from "react-admin";

const Detail = (props: any) => {
  const { record, isLoading }: any = useShowContext();

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!record) {
    return <div className="text-center py-8">No data available</div>;
  }

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Task Details</h1>

            <div className="space-y-6">
                {/* Title */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Title</h2>
                    <p className="mt-2 text-gray-900">{record.title || <span className="text-gray-500">N/A</span>}</p>
                </div>

                {/* Description */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Description</h2>
                    <p className="mt-2 text-gray-900">{record.description || <span className="text-gray-500">N/A</span>}</p>
                </div>

                {/* Status */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Status</h2>
                    <p className="mt-2 text-gray-900">{record.status || <span className="text-gray-500">N/A</span>}</p>
                </div>

                {/* Priority */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Priority</h2>
                    <p className="mt-2 text-gray-900">{record.priority || <span className="text-gray-500">N/A</span>}</p>
                </div>

                {/* Assignee */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Assignee</h2>
                    {record.assignee ? (
                        <div className="mt-2">
                            <p className="text-gray-900">Name: {record.assignee.name || <span className="text-gray-500">N/A</span>}</p>
                            <p className="text-gray-900">Email: {record.assignee.email || <span className="text-gray-500">N/A</span>}</p>
                        </div>
                    ) : (
                        <p className="text-gray-500">N/A</p>
                    )}
                </div>

                {/* Reporter */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Reporter</h2>
                    {record.reporter ? (
                        <div className="mt-2">
                            <p className="text-gray-900">Name: {record.reporter.name || <span className="text-gray-500">N/A</span>}</p>
                            <p className="text-gray-900">Email: {record.reporter.email || <span className="text-gray-500">N/A</span>}</p>
                        </div>
                    ) : (
                        <p className="text-gray-500">N/A</p>
                    )}
                </div>

                {/* Created At */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Created At</h2>
                    <p className="mt-2 text-gray-900">{record.createdAt ? new Date(record.createdAt).toLocaleString() : <span className="text-gray-500">N/A</span>}</p>
                </div>

                {/* Updated At */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Updated At</h2>
                    <p className="mt-2 text-gray-900">{record.updatedAt ? new Date(record.updatedAt).toLocaleString() : <span className="text-gray-500">N/A</span>}</p>
                </div>

                {/* Labels */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Labels</h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {record.labels && record.labels.length > 0 ? (
                            record.labels.map((label: string, index: number) => (
                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">{label}</span>
                            ))
                        ) : (
                            <span className="text-gray-500">No labels available</span>
                        )}
                    </div>
                </div>

                {/* Comments */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-700">Comments</h2>
                    {record.comments && record.comments.length > 0 ? (
                        <ul className="mt-2 list-disc pl-5">
                            {record.comments.map((comment: string, index: number) => (
                                <li key={index} className="text-gray-900">{comment}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No comments available</p>
                    )}
                </div>
            </div>
        </div>
    </>
  );
};

const TicketPageDetail = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <Detail />
      </SimpleShowLayout>
    </Show>
  );
};

export default TicketPageDetail;
