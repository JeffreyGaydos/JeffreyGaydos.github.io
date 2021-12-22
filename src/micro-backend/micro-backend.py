import os

sourceArray = []
fileNamesArray = []
titleArray = []
dateArray = []
contentArray = []

categoryArray = {''}

monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

routingPath = 'src\index.js'
pageDirectory = 'src\pages'
pageDirectoryF = './pages'
JSONDir = 'src\micro-backend\JSON'
exludedPages = ['404page.jsx', 'homepage.jsx', 'resume.jsx', 'about.jsx', 'webDevelopment.jsx', 'gameDevelopment.jsx', 'category_page.jsx', '#articleCopyPasta.jsx']
debug = False

JSAtt = 'python-backend='

def main():
    print("Hello World")
    i = 0
    for filename in os.listdir(pageDirectory):
        if(exludedPages.__contains__(filename)):
            continue
        if(debug):
            print(pageDirectory + filename)
        srcFile = open(pageDirectory + '\\' + filename)
        sourceArray.append(srcFile.read())
        fileNamesArray.append(filename)
        currDate = getDate(sourceArray.__len__() - 1).split(" ")
        print(currDate)
        if(sourceArray.__len__() > 1):
            sourceArray.pop()
            fileNamesArray.pop()
            srcFile.seek(0)
        else:
            continue

        #insertion sort
        insertionSortByDate(srcFile, filename, currDate)
        
        if(debug):
            print(f'\n**START:{i}**********************************************************************\n')
            print(sourceArray[i][:500])
            print(f'\n**END:{i}**********************************************************************\n')
            i += 1
        srcFile.close()

    #we sorted backwards...
    sourceArray.reverse()
    fileNamesArray.reverse()

    #recordingNames
    k = 0
    if(os.path.exists(JSONDir + '\\' + 'backend' + '.json')):
        os.remove(JSONDir + '\\' + 'backend' + '.json')
    BackendFile = open(JSONDir + '\\' + 'backend' + '.json', 'w')
    BackendFile.write('{\n\t"names": {\n\t\t')
    for fileName in fileNamesArray:
        if(k == fileNamesArray.__len__() -  1):
            BackendFile.write('"' + str(k) + '" : "' + fileName.removesuffix('.jsx') + '"\n\t')
        else:
            BackendFile.write('"' + str(k) + '" : "' + fileName.removesuffix('.jsx') + '",\n\t\t')
        k += 1
    BackendFile.write('},\n\n')

    #recording page data
    j = 0
    for filename in fileNamesArray:
        if(exludedPages.__contains__(filename)):
            continue
        if(j == fileNamesArray.__len__() - 1):
            BackendFile.write('\t"' + str(j) + '" : {\n\t\t"title" : "' + getTitle(j) + '",\n\t\t"date" : "' + getDate(j) + '",\n\t\t"content" : "' + getContent(j) + '",\n\t\t"image" : "' + getImageSrc(j) + '",\n\t\t"category" : "' + getCategory(j) +'"\n\t}\n')
        else:
            BackendFile.write('\t"' + str(j) + '" : {\n\t\t"title" : "' + getTitle(j) + '",\n\t\t"date" : "' + getDate(j) + '",\n\t\t"content" : "' + getContent(j) + '",\n\t\t"image" : "' + getImageSrc(j) + '",\n\t\t"category" : "' + getCategory(j) +'"\n\t},\n\n')
        categoryArray.add(getCategory(j))
        j += 1
    categoryArray.remove('')
    BackendFile.write('}')
    BackendFile.close() #all in one file so that it is easy to import everything we need at the beginning of our JS slide show

    routingFile = open(routingPath, 'r')
    routingFileContents = routingFile.read()
    routingFile.close()
    importStart = routingFileContents.index("/*Python Backend Imports Start*/\n")
    importStart += 33 #get past ourself
    while(routingFileContents[importStart + 1] != '*'):
        routingFileContents = routingFileContents[:importStart] + routingFileContents[importStart + 1:]
    routeStart = routingFileContents.index("{/* Python Backend Routes Start */}\n")
    routeStart += 37 #get past ourself
    while(routingFileContents[routeStart + 2] != '*'):
        routingFileContents = routingFileContents[:routeStart] + routingFileContents[routeStart + 1:]
    print(routingFileContents[importStart])
    print(routingFileContents[routeStart])

    for filename in fileNamesArray:
        FN2 = filename.removesuffix('.jsx')
        importString = 'import ' + FN2 + " from '" + pageDirectoryF + '/' + filename + "'\n"
        routeString = '\t\t\t\t\t\t\t<Route path="/' + FN2 + '" component={' + FN2 + '} />\n'
        routingFileContents = routingFileContents[:importStart] + importString + routingFileContents[importStart:]
        importStart += importString.__len__()
        routeStart += importString.__len__()
        routingFileContents = routingFileContents[:routeStart] + routeString + routingFileContents[routeStart:]
        routeStart += routeString.__len__()
    if(os.path.exists(routingPath)):
        os.remove(routingPath)
    routingFile = open(routingPath, 'w')
    #Add category pages (<Route path="/web-development" render={<CategoryPage category="Web Development"/>} />) to the index.js file
    for cat in categoryArray:
        categoryString = '\t\t\t\t\t\t\t<Route path="/' + str(cat).lower().replace(' ', '-') + '" render={() => <CategoryPage category="' + str(cat) + '"/>} />\n'
        routingFileContents = routingFileContents[:routeStart] + categoryString + routingFileContents[routeStart:]
        routeStart += categoryString.__len__()

    routingFile.write(''.join(routingFileContents))
    routingFile.close()

# Sorts all the projects by end date, and then if
# by start date if a tie arises. Projects that are
# active (i.e. Present) are always more recent than
# those that are complete
def insertionSortByDate(srcFile, filename, currDate):
    inserted = False
    for j in range(sourceArray.__len__()):
        da = getDate(j).split(" ")
        if da.__len__() < 5:
            if currDate.__len__() < 5:
                #both projects are present, sort by start date
                if da[1] > currDate[1]:
                    inserted = inLoopInsert(j, srcFile, filename)
                    break
                elif da[1] == currDate[1]:
                    if(monthCompare(da[0].removesuffix(","), currDate[0].removesuffix(",")) > 0):
                        inserted = inLoopInsert(j, srcFile, filename)
                        break
            else:
                inserted = inLoopInsert(j, srcFile, filename)
                break
        elif da.__len__() == 5:
            if currDate.__len__() < 5:
                continue
            else:
                #both are "finished" projects
                if da[4] > currDate[4]:
                    inserted = inLoopInsert(j, srcFile, filename)
                    break
                elif da[4] == currDate[4]:
                    if(monthCompare(da[3].removesuffix(","), currDate[3].removesuffix(",")) > 0):
                        inserted = inLoopInsert(j, srcFile, filename)
                        break
                    elif(monthCompare(da[3].removesuffix(","), currDate[3].removesuffix(",")) == 0):
                        if da[1] > currDate[1]:
                            inserted = inLoopInsert(j, srcFile, filename)
                            break
                        elif da[1] == currDate[1]:
                            if(monthCompare(da[0].removesuffix(","), currDate[0].removesuffix(",")) > 0):
                                inserted = inLoopInsert(j, srcFile, filename)
                                break
    
    if not inserted:
        srcFile.seek(0)
        sourceArray.append(srcFile.read())
        fileNamesArray.append(filename)

def inLoopInsert(j, srcFile, filename):
    sourceArray.insert(j, srcFile.read())
    fileNamesArray.insert(j, filename)
    return True

def getTitle(i):
    start = sourceArray[i].index(JSAtt + '"title"')
    start += 21 #to get us past ourself
    finalTitle = ''
    foundInnerHTML = False
    while(True):
        if(start >= sourceArray[i].__len__()):
            break
        if(sourceArray[i][start] != '>' and not foundInnerHTML):
            start += 1
            continue
        else:
            foundInnerHTML = True
        if(sourceArray[i][start] != '<'):
            finalTitle += sourceArray[i][start]
            start += 1
        else:
            break
    return finalTitle.removeprefix('>')

def getDate(i):
    start = sourceArray[i].index(JSAtt + '"date"')
    start += 20 #to get us past ourself
    finalDate = ''
    foundInnerHTML = False
    while(True):
        if(start >= sourceArray[i].__len__()):
            break
        if(sourceArray[i][start] != '>' and not foundInnerHTML):
            start += 1
            continue
        else:
            foundInnerHTML = True
        if(sourceArray[i][start] != '<'):
            finalDate += sourceArray[i][start]
            start += 1
        else:
            break
    return finalDate.removeprefix('>')

def getContent(i):
    start = sourceArray[i].index(JSAtt + '"content"')
    start += 23 #to get us past ourself
    finalContent = ''
    foundInnerHTML = False
    while(True):
        if(start >= sourceArray[i].__len__()):
            break
        if(sourceArray[i][start] != '>' and not foundInnerHTML):
            start += 1
            continue
        else:
            foundInnerHTML = True
        if(sourceArray[i][start] != '<'):
            finalContent += sourceArray[i][start]
            start += 1
        else:
            break
    return finalContent.removeprefix('>').replace('"', '\\"')

def getImageSrc(i):
    start = sourceArray[i].index(JSAtt + '"image"')
    start += 21 #to get us past ourself
    start += 15 # it is required that the image src is right after the backend identifier
    finalImg = ''
    while(True):
        if(sourceArray[i][start] != ')'):
            finalImg += sourceArray[i][start]
            start += 1
        else:
            break
    finalImg = finalImg.removesuffix('"').removeprefix('"')
    return finalImg.removeprefix("..")

def getCategory(i):
    start = sourceArray[i].index(JSAtt + '"category"')
    start += 24 #to get us past ourself
    finalContent = ''
    foundInnerHTML = False
    while(True):
        if(start >= sourceArray[i].__len__()):
            break
        if(sourceArray[i][start] != '>' and not foundInnerHTML):
            start += 1
            continue
        else:
            foundInnerHTML = True
        if(sourceArray[i][start] != '<'):
            finalContent += sourceArray[i][start]
            start += 1
        else:
            break
    return finalContent.removeprefix('>')

def monthCompare(month1, month2):
    return monthArray.index(month1) - monthArray.index(month2)

if __name__ == "__main__":
    main()