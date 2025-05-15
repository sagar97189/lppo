
import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MoreVertical, ChevronLeft, ChevronRight, AlertTriangle, CheckCircle2, Clock, Eye } from "lucide-react";

// Mock content data
const MOCK_CONTENT = [
  { id: 1, title: "Summer Vacation Photos", type: "Image", status: "Approved", reportCount: 0, submittedBy: "john@example.com", submittedDate: "2023-08-10" },
  { id: 2, title: "How to Cook Pasta", type: "Video", status: "Pending", reportCount: 0, submittedBy: "jane@example.com", submittedDate: "2023-08-15" },
  { id: 3, title: "Political Discussion", type: "Text", status: "Flagged", reportCount: 3, submittedBy: "robert@example.com", submittedDate: "2023-08-18" },
  { id: 4, title: "New Product Review", type: "Video", status: "Approved", reportCount: 0, submittedBy: "emily@example.com", submittedDate: "2023-08-20" },
  { id: 5, title: "Controversial Comment", type: "Comment", status: "Rejected", reportCount: 5, submittedBy: "michael@example.com", submittedDate: "2023-08-21" },
  { id: 6, title: "Travel Blog Post", type: "Text", status: "Approved", reportCount: 1, submittedBy: "sarah@example.com", submittedDate: "2023-08-22" },
  { id: 7, title: "Concert Highlights", type: "Video", status: "Pending", reportCount: 0, submittedBy: "david@example.com", submittedDate: "2023-08-23" },
  { id: 8, title: "Product Photos", type: "Image", status: "Approved", reportCount: 0, submittedBy: "lisa@example.com", submittedDate: "2023-08-25" },
  { id: 9, title: "Discussion Thread", type: "Text", status: "Flagged", reportCount: 2, submittedBy: "james@example.com", submittedDate: "2023-08-27" },
  { id: 10, title: "User Profile Picture", type: "Image", status: "Rejected", reportCount: 4, submittedBy: "amy@example.com", submittedDate: "2023-08-29" },
];

const ContentStatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case "Approved":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    case "Rejected":
      return <AlertTriangle className="h-4 w-4 text-red-500" />;
    case "Flagged":
      return <AlertTriangle className="h-4 w-4 text-orange-500" />;
    case "Pending":
      return <Clock className="h-4 w-4 text-blue-500" />;
    default:
      return null;
  }
};

export function ContentTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter content based on search term and filters
  const filteredContent = MOCK_CONTENT.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.submittedBy.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
  const paginatedContent = filteredContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle checkbox selection
  const toggleSelectItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === paginatedContent.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedContent.map(item => item.id));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Image">Image</SelectItem>
              <SelectItem value="Video">Video</SelectItem>
              <SelectItem value="Text">Text</SelectItem>
              <SelectItem value="Comment">Comment</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Flagged">Flagged</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {selectedItems.length > 0 && (
        <div className="flex items-center justify-between bg-muted/50 px-4 py-2 rounded-md">
          <span className="text-sm">{selectedItems.length} items selected</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Approve
            </Button>
            <Button variant="outline" size="sm">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Reject
            </Button>
          </div>
        </div>
      )}
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox 
                  checked={selectedItems.length === paginatedContent.length && paginatedContent.length > 0}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Reports</TableHead>
              <TableHead>Submitted By</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[60px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedContent.length > 0 ? (
              paginatedContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Checkbox 
                      checked={selectedItems.includes(item.id)}
                      onCheckedChange={() => toggleSelectItem(item.id)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <ContentStatusIcon status={item.status} />
                      <Badge 
                        variant={
                          item.status === "Approved" ? "default" : 
                          item.status === "Rejected" ? "destructive" : 
                          item.status === "Flagged" ? "outline" : "secondary"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    {item.reportCount > 0 ? (
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        {item.reportCount}
                      </Badge>
                    ) : (
                      "0"
                    )}
                  </TableCell>
                  <TableCell>{item.submittedBy}</TableCell>
                  <TableCell>{new Date(item.submittedDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <AlertTriangle className="mr-2 h-4 w-4" />
                          Reject
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-6">
                  No content found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-end gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              size="icon"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
