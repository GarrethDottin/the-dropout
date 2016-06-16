trainingData <- read.csv("training set.csv", sep = ",", header = TRUE)

trainingData$X <- NULL
trainingData$X.1 <- NULL 
trainingData$X.2 <- NULL 
trainingData$X.3 <-NULL 
trainingData$X.4 <- NULL 
trainingData$X.5 <- NULL 
trainingData$X.6 <- NULL
trainingDataLength <- length(trainingData)
container <- create_container(dtMatrix, trainingData$isDropout, trainSize=1:trainingDataLength, virgin=FALSE)

model <- train_model(container, "SVM", kernel="linear", cost=1)

##Bug Fix 
trace("create_matrix",edit=T)

##Prediction 

## Get predictionData 
predictionRaw <- fromJSON('modifiedResults.json', simplifyVector = FALSE)
predictionProcessed <- lapply(predictionRaw, function(x) x$school)

#Format for DataTable 
predictionData <- testResults
predSize = length(predictionData)


predMatrix <- create_mapretrix(predictionData, originalMatrix=dtMatrix)

predictionContainer <- create_container(predMatrix, labels=rep(0,predSize), testSize=1:predSize, virgin=FALSE)

results <- classify_model(predictionContainer, model)