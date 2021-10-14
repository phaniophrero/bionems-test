from apiclient.discovery import build
from oauth2client.service_account import ServiceAccountCredentials


SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
KEY_FILE_LOCATION = '../bionems-testing-328310-5a35b0cd11f1.json'
VIEW_ID = '252749701'


# def initialize_analyticsreporting():
#     """ Initializes an Analytics Reporting API V4 service object.

#     Returns:
#         An authorized Analytics Reporting API V4 service object.
#     """
#     credentials = ServiceAccountCredentials.from_json_keyfile_name(
#         KEY_FILE_LOCATION, SCOPES)

#     # Build the service object.
#     analytics = build('analyticsreporting', 'v4', credentials=credentials)

#     return analytics


# def get_report(analytics):
#     """Queries the Analytics Reporting API V4.

#     Args:
#         analytics: An authorized Analytics Reporting API V4 service object.

#     Returns:
#         The Analytics Reporting API V4 response.
#     """
#     return analytics.reports().batchGet(
#         body={
#             'reportRequests': [
#                 {
#                     'viewId': VIEW_ID,
#                     'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
#                     'metrics': [{'expression': 'ga:sessions'}],
#                     'dimensions': [{'name': 'ga:country'}]
#                 }
#             ]
#         }
#     ).execute()


# def print_response(response):
#     """Parses and prints the Analytics Reporting API V4 response.

#   Args:
#     response: An Analytics Reporting API V4 response.
#   """
#     for report in response.get('reports', []):
#         columnHeader = report.get('columnHeader', {})
#         dimensionHeaders = columnHeader.get('dimensions', [])
#         metricHeaders = columnHeader.get(
#             'metricHeader', {}).get('metricHeaderEntries', [])

#         for row in report.get('data', {}).get('rows', []):
#             dimensions = row.get('dimensions', [])
#             dateRangeValues = row.get('metrics', [])

#             for header, dimension in zip(dimensionHeaders, dimensions):
#                 print(header + ': ', dimension)
#                 # dataHD = header + dimension
#                 # return dataHD

#             for i, values in enumerate(dateRangeValues):
#                 print('Date range:', str(i))
#                 # dateRange = str(i)
#                 # return str(i)

#                 for metricHeader, value in zip(metricHeaders, values.get('values')):
#                     print(metricHeader.get('name') + ' :', value)
#                     # name = metricHeader.get('name') + ' :', value
#                     # return name


# def main():
#     analytics = initialize_analyticsreporting()
#     response = get_report(analytics)
#     print_response(response)


# if __name__ == "__main__":
#     main()

# @permission_classes([IsAdminUser])
# @api_view(['GET'])


def getAnalytics():
    credentials = ServiceAccountCredentials.from_json_keyfile_name(
        KEY_FILE_LOCATION, SCOPES)

    analytics = build('analyticsreporting', 'v4', credentials=credentials)

    # return analytics
    response = analytics.reports().batchGet(
        body={
            'reportRequests': [
                {
                    'viewId': VIEW_ID,
                    'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
                    'metrics': [{'expression': 'ga:sessions'}],
                    'dimensions': [{'name': 'ga:country'}]
                }
            ]
        }
    ).execute()

    dim = []
    val = []

    for report in response.get('reports', []):
        columnHeader = report.get('columnHeader', {})
        dimensionHeaders = columnHeader.get('dimensions', [])
        metricHeaders = columnHeader.get(
            'metricHeader', {}).get('metricHeaderEntries', [])
        rows = report.get('data', {}).get('rows', [])

        for row in rows:
            dimensions = row.get('dimensions', [])
            dateRangeValues = row.get('metrics', [])

            for header, dimension in zip(dimensionHeaders, dimensions):
                dim.append(dimension)

            for i, values in enumerate(dateRangeValues):
                for metricHeader, value in zip(metricHeaders, values.get('values')):
                    val.append(int(value))

    # return Response(val, dim)
    print(val, dim)


if __name__ == "__main__":
    getAnalytics()
